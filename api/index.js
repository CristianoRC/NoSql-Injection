
const express = require('express');
const app = express();
const cors = require('cors')
const commentService = require('./services/commentsService');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = 3000;

app.get('/api/comment', async (req, res) => {
    var comments = await commentService.getAll();
    return res.status(200).json({ comments });
})

app.post('/api/comment', async (req, res) => {
    const comment = req.body;
    await commentService.insertComment(comment);
    return res.status(201).json(comment);
})

app.listen(port, () => {
    console.log(`Api rodando - http://localhost:${port}`)
});