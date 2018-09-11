const mongoose = require('mongoose')
const Schema = mongoose.Schema

let carsSchema = new Schema(
  {
    brand: {
      type: String
    },
    model: {
      type: String
    },
    year: {
      type: Number
    },
    color: {
      type: String
    },
    mileage: {
      type: Number
    },
    engine: {
      type: String
    },
    power: {
      type: Number
    },
    registration_date: {
      type: Date
    },
    price: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const cars = mongoose.model('cars', carsSchema)

module.exports = cars
