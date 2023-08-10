'use client'
import componentsObj from '@/config/components'
import { FaCanadianMapleLeaf } from 'react-icons/fa'

const GridWrapper = ({ arrOfShapes, classCustom, heading }) => {
  return (
    <div className={`flex flex-wrap gap-1 ${classCustom}`} >
      {
        heading && (<h2 className=' text-xl md:text-5xl uppercase w-full text-center dark:text-slate-500 animate-in fade-in duration-1000 animate-twice ease-in'>
          <FaCanadianMapleLeaf className='inline-block mr-2' />
          {heading}
          <FaCanadianMapleLeaf className='inline-block mr-2' />
        </h2>)
      }
      {
        (arrOfShapes && arrOfShapes.length > 0) && arrOfShapes.map((Shape, index) => {
          const { component, props } = Shape
          const Component = componentsObj[component]
          if (!Component) return null
          return (
            <Component key={index} {...props} />
          )
        })
      }
    </div>
  )
}

export default GridWrapper
