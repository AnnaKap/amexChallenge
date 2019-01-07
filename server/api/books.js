const axios = require('axios')
const router = require('express').Router()
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const {format, value} = req.body
    const {data} = await axios.get(
      //format=json (to get json)
      //jscmd=data (to get title/subtitle of book)
      `https://openlibrary.org/api/books?bibkeys=${format}:${value}&format=json&jscmd=data`
    )
    //accessing authors of a book
    data[Object.keys(data)[0]].authors.forEach(author => {
      console.log(author.name)
    })
    // console.log("data",data[Object.keys(data)[0]].authors)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
