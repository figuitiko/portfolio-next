'use client'
import componentsObj from '@/config/components'

const GridWrapperInside = ({ arrOfShapes, classCustom }) => {
  return (
    <div className={`flex flex-wrap gap-1 ${classCustom}`} >
      {
        arrOfShapes.map((Shape, index) => {
          const { component, props } = Shape
          const Component = componentsObj[component]
          return (
            <Component key={index} {...props} />
          )
        })
      }
    </div>
  )
}

export default GridWrapperInside
