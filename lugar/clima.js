const axios = require('axios');

const clima = async(lat, lng)=>{

    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&cnt=10&units=metric&appid=7445e027471fad4c09d836df3087af6d`);

    if(response.code === 400){
        throw new Error('Error al buscar la localidad');
    }
    return{
        tempNow : response.data.main.temp,
        tempMax : response.data.main.temp_max,
        tempMin : response.data.main.temp_min,
        weather : response.data.weather[0].description
    }
}

module.exports ={
    clima
}