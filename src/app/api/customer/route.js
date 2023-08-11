import Customer from '@/models/customer'
import { connectToDB } from '@/utils/db'
import validateCustomer from '@/utils/validations'

export const POST = async (request) => {
  const { name, email, subject, message } = await request.json()

  try {
    const result = validateCustomer({ name, email, subject, message })
    if (!result.success) {
      return new Response(JSON.stringify(result.error), { status: 400 })
    }

    await connectToDB()
    const newCustomer = new Customer({ name, email, subject, message })
    await newCustomer.save()
    return new Response(JSON.stringify(newCustomer), { status: 201 })
  } catch (error) {
    return new Response('Failed to create a new Customer', { status: 500 })
  }
}
