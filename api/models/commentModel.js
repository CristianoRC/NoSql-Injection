const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=noSqlInjection";
const client = new MongoClient(uri);

const getAll = () => {
    return commentsCollection().find().toArray();;
}

const get = (name) => {
    return commentsCollection()
        .find({ name })
        .toArray();
}

const insert = async (comment) => {
    await commentsCollection().insertOne(comment);
}

const commentsCollection = () => client.db("noSqlInjection").collection("comments");
module.exports = { getAll, get, insert };