var dotenv = require('dotenv');
dotenv.config();
const MONGOURL = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

mongoose.connect(MONGOURL, { useNewUrlParser: true });


client.connect(err => {
    const collection = client.db("pokedb").collection("pokedex");
    // perform actions on the collection object
    client.close();
});


mongoose.connection.on('connected', function () {
    console.log('Connected  ' + mongoose.connection.readyState);

});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

//For nodemon restarts
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// //For app termination
// commented out because I'm not using Windows. 
// process.on('SIGINT', function () {
//     gracefulShutdown('app termination', function () {
//         process.exit(0);
//     });
// }
// );


//For Heroku app termination
process.on('SIGTERM', function () {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});


// BRING IN YOUR SCHEMAS & MODELS
require('./pokemon');
require('./users');
