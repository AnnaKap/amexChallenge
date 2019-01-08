const axios = require('axios')
const router = require('express').Router()
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    let url = `http://openlibrary.org/search.json?`
    let currIdx = 0
    //construct the correct url according to query
    Object.keys(req.body).forEach((key, idx) => {
      if (req.body[key] !== '') {
        if (currIdx > 0) {
          url = url.concat('&')
        }
        //replace whitespaces and grammar chars with "+"
        let value = req.body[key].replace(/[, :\.]+/g, '+')
        url = url.concat(`${key}=${value}`)
        currIdx++
      }
      console.log('key', key, 'value', req.body[key])
      console.log('url', url)
    })

    const {data} = await axios.get(url)
    console.log(data)
    res.send(data)
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
