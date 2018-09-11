const Garage = require('../models/garage')

module.exports = {
  insertGarage: (req, res) => {
    let garage = {
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      maximum_cars: req.body.maximum_cars,
      carId: req.body.carId
    }

    Garage.create(garage)
      .then(garages => {
        res.status(200).json({ message: 'add Garage to db success', garages })
      })
      .catch(err => {
        console.log(err)
      })
  },
  getGarage: (req, res) => {
    Garage.find({})
      .then(garages => {
        res.status(200).json({ message: 'get Garage success', garages })
      })
      .catch(err => {
        console.log(err)
      })
  },
  findOneGarage: (req, res) => {
    Garage.findById({ _id: req.params.id })
      .then(garage => {
        res.status(200).json({ message: 'get one success', garage })
      })
      .catch(err => {
        console.log(err)
      })
  },
  getCarId: (req, res) => {
    Garage.find({ _id: req.params.id })
      .populate('carId')
      .exec(function(err, cars) {
        if (err) {
          res.status(400).json({ message: 'error' })
        } else {
          res.status(200).json({ message: 'berhasil', cars })
        }
      })
  },
  editGarage: (req, res) => {
    let garages = {
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      maximum_cars: req.body.maximum_cars
    }

    Garage.findByIdAndUpdate(req.params.id, garages)
      .then(garages => {
        res.status(200).json({ message: 'edit Garage success', garages })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
