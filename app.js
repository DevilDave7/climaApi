const colors = require('colors');
const translate = require('translate');

const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const {clima} = require('./lugar/clima');

let getInfo = async(direccion)=>
{
    try{
        let place = await lugar.getLugar(direccion);
        let weather = await clima(place.Latitud,place.Longitud);

        return{
            Ciudad : place.lugar,
            Temperatura : weather.tempNow,
            Maxima : weather.tempMax, 
            Minima : weather.tempMin,
            clima : await translate(weather.weather,{
            to: 'es',
            engine: 'yandex',
            key: 'trnsl.1.1.20190102T175655Z.7e321fbc2d601292.3c6d64f1ac4e8fca08d9f3f4dee25013350a28ef'
            }).then(text => text)
        }

    }catch(e){
        return colors.red(`No se pudo determinar el clima en la ciudad de ${colors.bgRed(colors.white(direccion))}`)
    }
    
}

getInfo(argv.direccion).then(res => console.log(res))
.catch(e => console.log(e));
