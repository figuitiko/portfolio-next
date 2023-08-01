'use client'
import componentsObj from '@/config/components'

const GridWrapperInside = ({ flexDirection, arrOfShapes, width, height, gap, justify }) => {
  const styleObj = {
    flexDirection: flexDirection || 'row',
    width: width || '28px',
    height: height || '100%',
    gap: gap || '4px',
    justifyContent: justify || 'flex-start'
  }
  return (
    <div className='flex flex-wrap' style={styleObj}>
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
