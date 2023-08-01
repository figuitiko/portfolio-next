import GridWrapper from '@/components/share/GridWrapper'
import homeConfig from '@/config/home'

export default function Home () {
  const { section1 } = homeConfig
  return (
    <div className='flex flex-col justify-center items-center'>
      <GridWrapper arrOfShapes={section1} gap={'1.5rem'} width='1000px' />
    </div>
  )
}
