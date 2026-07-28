const commentsRouter = require('express').Router()
const Comment = require('../models/comment')

commentsRouter.get('/', async (request, response) => {
  const query = 'SELECT * FROM comments ORDER BY created_at DESC'
  const comments = await Comment.query(query)
  response.json(comments.rows)
})

commentsRouter.post('/', async (request, response) => {
  const query = 'INSERT INTO comments (username, text) VALUES ($1, $2) RETURNING *'
  const { username, text } = request.body
  const addedComment = await Comment.query(query, [username, text])
  response.json(addedComment.rows[0])
})

commentsRouter.delete('/:id', async (request, response) => {
  const query = 'DELETE FROM comments WHERE id = $1 RETURNING *'
  const deletedComment = await Comment.query(query, [request.params.id])
  response.json(deletedComment.rows[0])
})

commentsRouter.delete('/delete/all', async (request, response) => {
  const query = 'DELETE FROM comments'
  await Comment.query(query)
  response.json({success: "everything is gone"})
})

module.exports = commentsRouter