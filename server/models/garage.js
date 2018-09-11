const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


let garageSchema = new Schema(
  {
    name: {
      type: String
    },
    address: {
      type: String
    },
    phone: {
      type: String
    },
    email: {
      type: String
    },
    maximum_cars: {
      type: Number
    },
    carId: [
      {
        type: ObjectId,
        ref: 'cars'
      }
    ]
  },
  {
    timestamps: true
  }
)

const garage = mongoose.model('garage', garageSchema)

module.exports = garage
