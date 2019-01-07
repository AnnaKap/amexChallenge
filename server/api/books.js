const axios = require('axios')
const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const book = await axios.get(
      'https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json'
    )
    console.log(book.data)
    res.json(book.data)
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
