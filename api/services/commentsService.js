const commentModel = require('../models/commentModel')
const redis = require('redis');

const get = async (name) => {
    const comment = name ? await commentModel.get(name) : await commentModel.getAll();
    getRedisClient().expireAt(name, new Date(new Date() + 30 * 60000));
    return comment;
};

const insertComment = async (comment) => {
    await commentModel.insert(comment);
};

const getRedisClient = () => {
    const client = redis.createClient();
    client.connect()
    return client;
}

module.exports = { get, insertComment };