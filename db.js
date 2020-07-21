const moongose = require('mongoose');

const urlMongo = 'mongodb://heroku_8bbdl16h:lr1olar62g0g5k1egpr3itbso2@ds135061.mlab.com:35061/heroku_8bbdl16h';

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

moongose.connect(urlMongo, config);