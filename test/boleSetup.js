const bole = require('bole');

function config() {
    bole.output({
        level: 'info',
        stream: process.stdout
    });
    
    return bole('unit test');
}

module.exports = config();