const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/de6d48035d9615cb3b9140a7b1b38199/'+latitude +',' +longitude
    request({ url , json:true}, (error, {body}) =>{
        if(error){
            callback('Unable to connect to Weather service', undefined)
        }
        else if(body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, body.daily.data[0].summary+ ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
})
}

module.exports = forecast;