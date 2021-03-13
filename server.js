const express = require('express')

var app = express()

app.set('port', 3000)

var server = app.listen(app.get('port'), () => {
    console.log('server is started')
});