const commentModel = require('../models/commentModel')

const get = (name) => {
    return name ? commentModel.get(name) : commentModel.getAll();
};

const insertComment = async (comment) => {
    await commentModel.insert(comment);
};


module.exports = { get, insertComment };