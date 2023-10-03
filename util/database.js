const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://worksofdeep:7fpyJeTxIwI1WClA@cluster1.btoanvw.mongodb.net/')
    .then((client) => {
        console.log('MongoDB connected');
        _db = client.db('test');
        callback();
    }).catch((err) => {
        console.log('MONGODB ERROR', err);
        throw 'CONNECTION ERROR';
    })
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No DB Found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;