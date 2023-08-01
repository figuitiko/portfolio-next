import Image from 'next/image'
import React from 'react'

const PictureWrapper = () => {
  return (
    <>
    <picture className='flex justify-center w-1/2 h-full aspect-w-1 aspect-h-1 overflow-hidden'>
      <Image src="/images/perfil2.jpeg" alt="hero" width={220} height={220} className='rounded-tl-lg rounded-br-lg object-cover' />
    </picture>
    <div className='flex flex-col w-1/2'>
      <span className='text-over-heading'>
        A web developer
      </span>
      <h2 className='h2-subtitle'>
        Frank Freeman
      </h2>
        <small className='text-smaller'>
          a web developer base in Mexico
        </small>
    </div>
    </>
  )
}

export default PictureWrapper
