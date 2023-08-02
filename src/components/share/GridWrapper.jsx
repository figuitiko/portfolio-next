'use client'
import componentsObj from '@/config/components'

const GridWrapper = ({ arrOfShapes, classCustom }) => {
  return (
    <div className={`flex flex-wrap gap-1 ${classCustom}`} >
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
