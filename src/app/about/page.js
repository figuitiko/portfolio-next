import GridWrapper from '@/components/share/GridWrapper'
import React from 'react'
import aboutConfig from '@/config/about'

const About = () => {
  return (
    <GridWrapper arrOfShapes={aboutConfig} classCustom='wrapper-home overflow-x-hidden animate-in fade-in duration-500 animate-twice ease-in' />
  )
}

export default About
