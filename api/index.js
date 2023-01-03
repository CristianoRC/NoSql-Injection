
const express = require('express');
const app = express();
const cors = require('cors')
const commentService = require('./services/commentsService');
const userModel = require('./models/userModel')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = 3000;

app.get('/api/comment', async (req, res) => {
    const name = req.query.name;
    const useCache =  req.query.useCache;
    var comments = await commentService.get(name, useCache);
    return res.status(200).json({ comments });
})

app.post('/api/comment', async (req, res) => {
    const comment = req.body;
    await commentService.insertComment(comment);
    return res.status(201).json(comment);
})

app.post('/api/login', async (req, res) => {
    var { user, password } = req.body;
    var user = await userModel.get(user, password)
    return user ? res.status(200).json({ token: "session token aqui!", user }) : res.status(401).send();
})

app.listen(port, () => {
    console.log(`Api rodando - http://localhost:${port}`)
});