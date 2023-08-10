import GridWrapper from '@/components/share/GridWrapper'
import homeConfig from '@/config/home'

export default function Home () {
  const { section1 } = homeConfig
  return (
      <GridWrapper arrOfShapes={section1} classCustom='wrapper-home overflow-x-hidden animate-in fade-in duration-1000 animate-twice ease-in  custom-scrollbar' />
  )
}
