'use client'
import useContactForm from '@/hooks/useContactForm'
import { Toaster } from 'react-hot-toast'
import { InfinitySpin } from 'react-loader-spinner'

const ContactForm = () => {
  const { register, handleSubmit, errors, onSubmit, isLoading } = useContactForm()

  return (
    <div className='flex flex-col w-full py-2'>
      <h3 className='text-2xl font-semibold  dark:text-blue-600 my-2 '>Contact Form</h3>
      {isLoading
        ? (
          <div className='flex w-full min-h-[400px] justify-center items-center'>
            <InfinitySpin className='mx-auto text-white bg-white' color='#000000' height={200} width={200} />
          </div>
          )
        : (
          <form className='flex flex-col gap-2 flex-1' onSubmit={handleSubmit(onSubmit)}>
            <input
              type='text '
              placeholder='Name*'
              className='p-2 rounded-md border bg-zinc-800 dark:bg-gray-300 dark:text-gray-500  border-gray-700 dark:border-gray-300'
              {...register('name', { required: true })}
            />
            <p className='text-red-500'>{errors.name?.message}</p>
            <input
              type='text'
              placeholder='Email*'
              className='p-2 rounded-md border bg-zinc-800 dark:bg-gray-300 dark:text-gray-500  border-gray-700 dark:border-gray-300'
              {...register('email', { required: true })}
            />
            <p className='text-red-500'>{errors.email?.message}</p>
            <input
              type='text'
              placeholder='Your Subject*'
              className='p-2 rounded-md border bg-zinc-800 dark:bg-gray-300 dark:text-gray-500  border-gray-700 dark:border-gray-300'
              {...register('subject', { required: true })}
            />
            <p className='text-red-500'>{errors.subject?.message}</p>
            <textarea
              placeholder='Your Message*'
              className='p-2 rounded-md border bg-zinc-800 dark:bg-gray-300 dark:text-gray-500  border-gray-700 dark:border-gray-300'
              {...register('message', { required: true })}
            />
            <p className='text-red-500'>{errors.message?.message}</p>
            <button className='p-2 rounded-md border bg-zinc-800 dark:bg-gray-300 dark:text-gray-500  border-gray-700 dark:border-gray-300' type='submit'>Send</button>
            <Toaster />
          </form>
          )
      }
    </div>
  )
}

export default ContactForm
