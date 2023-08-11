import { Schema, model, models } from 'mongoose'

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  subject: {
    type: String
  },
  message: {
    type: String
  }
})

const Customer = models.Customer || model('Customer', CustomerSchema)

export default Customer
