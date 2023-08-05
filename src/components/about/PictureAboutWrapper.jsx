import Image from 'next/image'
import React from 'react'

const PictureAboutWrapper = () => {
  return (
    <picture className='flex justify-center w-full'>
      <Image src='/images/perfil2.jpeg' alt='Team Members' width={200} height={200} className='rounded-2xl object-cover w-full'/>
    </picture>
  )
}

export default PictureAboutWrapper
