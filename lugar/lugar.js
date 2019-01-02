const axios = require('axios');

let getLugar = async(direccion) =>{

    let encodeURL = encodeURI(direccion);

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

        if(response.data.status === 'ZERO_RESULTS'){
            throw new Error (`No existen resultados para la direccion ${direccion}`);
        }
        let lugar = response.data.results[0].formatted_address;
        let location = response.data.results[0].geometry.location;
       
         return {
             lugar,
             Latitud: location.lat,
             Longitud: location.lng
         }
}

module.exports = {
    getLugar
}

