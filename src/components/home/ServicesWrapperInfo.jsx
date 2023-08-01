import FlexWrapper from '../share/FlexWrapper'
import FooterBoxInfo from './FooterBoxInfo'
import MainBoxInfo from './MainBoxInfo'
import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { BiLogoMongodb, BiLogoNodejs, BiLogoWordpress, BiLogoRedux, BiLogoTypescript, BiLogoPhp } from 'react-icons/bi'

const ServicesWrapperInfo = () => {
  return (
    <FlexWrapper flexDirection='row' justify='flex-start' align='flex-start' height='100%' width='100%'>
      <MainBoxInfo gap ='gap-4'>
        <IoLogoJavascript className='text-4xl text-cyan-50' />
        <FaReact className='text-4xl text-cyan-50' />
        <BiLogoRedux className='text-4xl text-cyan-50' />
        <BiLogoTypescript className='text-4xl text-cyan-50' />
        <BiLogoMongodb className='text-4xl text-cyan-50' />
        <BiLogoNodejs className='text-4xl text-cyan-50' />
        <BiLogoWordpress className='text-4xl text-cyan-50' />
        <BiLogoPhp className='text-4xl text-cyan-50' />
      </MainBoxInfo>
      <FooterBoxInfo url='/services' textInfo='what I do' textLink='Services Offering' />
    </FlexWrapper>
  )
}

export default ServicesWrapperInfo
