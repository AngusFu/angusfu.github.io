var os = require('os');
var ifaces = os.networkInterfaces();

var ip = '';
console.log(ifaces)
for (var dev in ifaces) {
    var alias = 0;
    ifaces[dev].forEach(function(details) {
        if (details.family == 'IPv4') {
            // console.log(dev + (alias ? ':' + alias : ''), details.address);

            ++alias;
        }
    });
}
