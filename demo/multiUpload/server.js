var http = require('http');

var fs = require('fs');

var util = require('util');
var log = util.log;

var formidable = require('formidable');

var shelljs = require('shelljs/global');

var ip = require('./lib/ip');
var open = require('opn');


//////////////////////////////////////////////////
var server = http.createServer();
var port = 6853;
server.listen(port);

log('Http Server is listening ' + port + ' port.');

open('http://' + (ip ? ip : '127.0.0.1') + ':' + port);

if (!test('-e', './temp/')) {
    fs.mkdirSync('./temp/');
}
if (!test('-e', './upload/')) {
    fs.mkdirSync('./upload/');
}

server.on('request', function(request, response) {
    var filename = null;
    var url = require('url').parse(request.url);

    switch (url.pathname) {
        case '/upload':
            // parse a file upload
            var form = new formidable.IncomingForm();

            form.uploadDir = "./temp";
            form.hash = false;
            form.keepExtensions = true;

            form.parse(request, function(err, fields, files) {
                for (var file in files) {
                    file = files[file];
                    fs.renameSync(file.path, './upload/' + file.name);
                }

                response.writeHead(200, {
                    'content-type': 'text/plain'
                });
                response.write('received upload:\n\n');
                response.end(util.inspect({
                    fields: fields,
                    files: files
                }));
            });

            break;
        case '/' || '/index.html':
            filename = 'index.html';
        default:
            filename = filename || url.pathname.substring(1); // 去掉前导'/'
            // 基于其扩展名推测内容类型
            var type = (function(_type) {
                switch (_type) { // 扩展名
                    case 'html':
                    case 'htm':
                        return 'text/html; charset=UTF-8';
                    case 'js':
                        return 'application/javascript; charset=UTF-8';
                    case 'css':
                        return 'text/css; charset=UTF-8';
                    case 'txt':
                        return 'text/plain; charset=UTF-8';
                    case 'manifest':
                        return 'text/cache-manifest; charset=UTF-8';
                    default:
                        return 'application/octet-stream';
                }
            }(filename.substring(filename.lastIndexOf('.') + 1)));
            // 异步读取文件,并将内容作为单独的数据块传回给回调函数
            // 对于确实很大的文件,使用API fs.createReadStream()更好
            fs.readFile(filename, function(err, content) {
                if (err) { // 如果由于某些原因无法读取文件
                    response.writeHead(404, {
                        'Content-type': 'text/plain; charset=UTF-8'
                    });
                    response.write(err.message);
                } else { // 否则读取文件成功
                    response.writeHead(200, {
                        'Content-type': type
                    });
                    response.write(content); // 把文件内容作为响应主体
                }
                response.end();
            });
    }
});
