import React from 'react'
import CommonShape from '../share/CommonShape'

const InfoClients = () => {
  return (
    <div className='flex flex-col md:flex-row  gap-4 justify-center items-center w-full h-full'>
      <CommonShape classCustom='info-client-block dark:bg-gray-300'>
        <h3 className='text-3xl font-bold mt-4'>
          12
        </h3>
        <p className='text-extra-small uppercase font-medium mt-auto text-center'>
          years of <br/> experience
        </p>
      </CommonShape>
      <CommonShape classCustom='info-client-block dark:bg-gray-300'>
      <h3 className='text-3xl font-bold mt-4'>
          +50
        </h3>
        <p className='text-extra-small uppercase font-medium mt-auto text-center '>
         Clients <br/> Worldwide
        </p>
      </CommonShape>
      <CommonShape classCustom='info-client-block dark:bg-gray-300'>
      <h3 className='text-3xl font-bold mt-4'>
         +60
        </h3>
        <p className='text-extra-small uppercase font-medium mt-auto text-center '>
          Total <br/> projects
        </p>
      </CommonShape>
    </div>
  )
}

export default InfoClients
