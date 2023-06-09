const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Specify the base number to calculate multiplication table',
        demandOption: true
    })
    .option('s', {
        alias: 'Show',
        type: 'boolean',
        demandOption: false,
        describe: 'Console print of the multiplication table'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        demandOption: false,
        describe: 'Set the limit to calculate the multiplication table'
    })
    .check((argv) => {
        if (isNaN(argv.b)) {
            throw ("Only numbers may be passed for base Option").red
        } else {
            return true
        }
    })
    .check((argv) => {
        if (isNaN(argv.l) || argv.l< 0 || argv.l> 100) {
            throw ("Only numbers may be passed for Limit Option and the limit number are between 1 to 100").red
        } else {
            return true
        }
    })
    .argv;
module.exports = argv;