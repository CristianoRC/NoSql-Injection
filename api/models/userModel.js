const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=noSqlInjection";
const client = new MongoClient(uri);


const get = async (user, password) => {
    return await usersCollection().findOne({ user, password });
}

const usersCollection = () => client.db("noSqlInjection").collection("users");

module.exports = { get };