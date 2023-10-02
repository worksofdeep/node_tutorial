const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://worksofdeep:7fpyJeTxIwI1WClA@cluster1.btoanvw.mongodb.net/')
    .then((client) => {
        console.log('MongoDB connected');
        // console.log('MongoDB connected', client);
        callback(client);
    }).catch((err) => {
        console.log('MONGODB ERROR', err);
    })
}

module.exports = mongoConnect;