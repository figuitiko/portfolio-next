import { z } from 'zod'

const customerSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email().min(3).max(255),
  subject: z.string().min(3).max(255),
  message: z.string().min(3).max(255)
})

const validateCustomer = (customer) => {
  return customerSchema.safeParse(customer)
}

export default validateCustomer
