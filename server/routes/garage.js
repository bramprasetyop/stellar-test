var express = require('express')
var router = express.Router()
const { insertGarage, getGarage, editGarage,findOneGarage,getCarId } = require('../controllers/garage')

/* GET home page. */
router
  .post('/add/garage', insertGarage)
  .get('/garage', getGarage)
  .put('/garage/:id', editGarage)
  .get('/garage/:id',findOneGarage)
  .get('/carbyid/:id',getCarId)

module.exports = router
