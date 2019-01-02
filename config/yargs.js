const argv = require('yargs')
    .options({
        direccion:{
            alias: 'd',
            desc: 'Ciudad de la cual se quiere obtener la informacion',
            demand: true
        }
    })
    .help()
    .argv;

    module.exports = {
        argv
    }