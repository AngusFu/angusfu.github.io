var os = require('os');
var ifaces = os.networkInterfaces();

var ip = '';

for (var dev in ifaces) {
    var alias = 0;
    for (var i = 0; i < ifaces[dev].length; i++) {
        var details = ifaces[dev][i];
        if (details.family == 'IPv4') {
            // console.log(dev + (alias ? ':' + alias : ''), details.address);
            if (details.address !== '127.0.0.1') {
                ip = details.address
                break;
            }
            ++alias;
        }
    };
}

module.exports = ip;