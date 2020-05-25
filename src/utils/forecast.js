const request = require('request')


const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=52acdc1ef270ac7bee0ad3b2faa3e26c&query=' + latitude + ',' + longtitude + '&units=m'

    request({url, json: true}, (error, {body} = {}) => {

        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.error) {
            callback('Unable to find geo location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '.' + ' It is currently ' + body.current.temperature + ' degree. ' + 'It feels like ' + body.current.feelslike + '. ' + 'The humidity is ' + body.current.humidity + '%')
        }

    })
}

module.exports = forecast