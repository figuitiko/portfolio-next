import GridWrapper from '@/components/share/GridWrapper'
import React from 'react'
import aboutConfig from '@/config/about'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
    <GridWrapper arrOfShapes={aboutConfig} classCustom='wrapper-home' />
  </div>
  )
}

export default About
