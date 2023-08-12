import GridWrapper from '@/components/share/GridWrapper'
import contactConfig from '@/config/contact'

const Contact = () => {
  return (
    <GridWrapper arrOfShapes={contactConfig} classCustom='wrapper-contact overflow-x-hidden animate-in fade-in duration-500 animate-twice ease-in' />
  )
}

export default Contact
