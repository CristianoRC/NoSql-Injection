const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27020";
const client = new MongoClient(uri);

const getAll = async () => {
    await commentsCollection().find();
}

const insert = async (comment) => {
    await commentsCollection().insertOne(comment);
}

const commentsCollection = () => client.db("noSqlInjection").collection("comments");

module.exports = { getAll, insert };