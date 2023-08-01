import React from 'react'
import CommonShape from '../share/CommonShape'

const InfoClients = () => {
  return (
    <div className='flex gap-4 justify-center items-center w-full h-full'>
      <CommonShape borderRadio='16px' width='120px' height='140px' padding='16px' gap='4px' flexDirection='column' justify={'center'} alignItems={'center'}>
        <h3 className='text-3xl font-bold mt-4'>
          12
        </h3>
        <p className='text-extra-small uppercase font-medium mt-auto text-center'>
          years of <br/> experience
        </p>
      </CommonShape>
      <CommonShape borderRadio='16px' width='120px' height='140px' padding='16px' gap='4px' flexDirection='column' justify={'center'} alignItems={'center'}>
      <h3 className='text-3xl font-bold mt-4'>
          +50
        </h3>
        <p className='text-extra-small uppercase font-medium mt-auto text-center'>
         Clients <br/> Worldwide
        </p>
      </CommonShape>
      <CommonShape borderRadio='16px' width='120px' height='140px' padding='16px' gap='4px' flexDirection='column' justify={'center'} alignItems={'center'}>
      <h3 className='text-3xl font-bold mt-4'>
         +60
        </h3>
        <p className='text-extra-small uppercase font-medium mt-auto text-center'>
          Total <br/> projects
        </p>
      </CommonShape>
    </div>
  )
}

export default InfoClients
