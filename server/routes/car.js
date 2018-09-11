var express = require('express')
var router = express.Router()
const { insertCar, getCar,editCar,findOneCar } = require('../controllers/car')

/* GET home page. */
router.post('/add/car', insertCar)
      .get('/car', getCar)
      .put('/car/:id',editCar)
      .get('/car/:id',findOneCar)

module.exports = router
