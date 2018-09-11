const Car = require('../models/cars')

module.exports = {
  insertCar: (req, res) => {
    let car = {
      brand: req.body.brand,
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      mileage: req.body.mileage,
      engine: req.body.engine,
      power: req.body.power,
      registration_date: new Date(),
      price: req.body.price
    }

    Car.create(car)
      .then(cars => {
        res.status(200).json({ message: 'add car to db success', cars })
      })
      .catch(err => {
        console.log(err)
      })
  },
  getCar: (req, res) => {
    Car.find({})
      .then(cars => {
        res.status(200).json({ message: 'get car success', cars })
      })
      .catch(err => {
        console.log(err)
      })
  },
  findOneCar: (req, res) => {
    Car.findById({ _id: req.params.id })
      .then(car => {
        res.status(200).json({ message: 'get one success', car })
      })
      .catch(err => {
        console.log(err)
      })
  },
  editCar: (req, res) => {
    let car = {
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      registration_date: new Date(),
      price: req.body.price
    }
    Car.findByIdAndUpdate(req.params.id, car)
      .then(cars => {
        res.status(200).json({ message: 'edit car success', cars })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
