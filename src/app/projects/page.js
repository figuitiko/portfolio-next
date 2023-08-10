import GridWrapper from '@/components/share/GridWrapper'
import React from 'react'
import { lefSide, rightSide } from '@/config/projects'

const Projects = () => {
  return (
    <div className='flex flex-wrap gap-1 wrapper-home  overflow-y-scroll max-h-[800px] custom-scrollbar overflow-x-hidden animate-in fade-in duration-1000 animate-twice ease-in '>
      <GridWrapper classCustom='wrapper-home wrapper-home-projects-left    ' arrOfShapes={lefSide} />
      <GridWrapper classCustom='wrapper-home wrapper-home-projects-right ' arrOfShapes={rightSide} heading={'All Projects'} />
    </div>
  )
}

export default Projects
