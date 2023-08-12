import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required()
})
const useContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })
  useEffect(() => {
    if (isSuccess) {
      reset()
    }
  }, [isSuccess])
  const onSubmit = async (data) => {
    setIsLoading(true)
    const { name, email, subject, message } = data
    try {
      const response = await fetch('/api/customer', {
        method: 'POST',
        body: JSON.stringify({ name, email, subject, message })
      })
      if (response.ok) {
        setIsLoading(false)
        toast.success('Message sent successfully')
        setIsSuccess(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return { register, handleSubmit, errors, onSubmit, isLoading }
}

export default useContactForm
