const express = require('express')
const weather = require('weather-js')
const app = express()
const cors = require("cors");

app.use(cors())
app.use(express.json())

app.get('/getweather', async (req, res) => {
    console.log(req.query.city)
    await weather.find({ search: `${req.query.city}, ${req.query.country}`, degreeType: 'F'}, function (err, result) {
        if (err) console.log(err)
        res.send(JSON.stringify((result[2])))
    })
})

app.listen(3000, () => {
    console.log(`listening on port 3000`)
})