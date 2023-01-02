const commentModel = require('../models/commentModel')

const getAll = () => {
    return commentModel.getAll();
};

const insertComment = async (comment) => {
    await commentModel.insert(comment);
};


module.exports = { getAll, insertComment };