const commentModel = require('../models/commentModel')
const redis = require('redis');

const get = async (name, useCache) => {
    if (useCache)
        return await redisGetPromise(name);

    const comment = name ? await commentModel.get(name) : await commentModel.getAll();
    getRedisClient().set(name, JSON.stringify(comment));
    return comment;
};

const insertComment = async (comment) => {
    await commentModel.insert(comment);
};


const redisGetPromise = (key) => {
    return new Promise((resolve, reject) => {
        getRedisClient().get(key, (error, comment) => {
            if (error)
                return reject(error)
            return resolve(JSON.parse(comment));
        })
    });
}

const getRedisClient = () => {
    const client = redis.createClient();
    return client;
}

module.exports = { get, insertComment };