'use client'
import componentsObj from '@/config/components'

const GridWrapper = ({ flexDirection, arrOfShapes, width, height, gap, justify }) => {
  const styleObj = {
    flexDirection: flexDirection || 'row',
    width: width || '28px',
    height: height || '100%',
    gap: gap || '4px',
    justify: justify || 'flex-start'
  }
  return (
    <div className='flex flex-wrap' style={styleObj}>
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
