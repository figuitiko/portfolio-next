import FlexWrapper from '../share/FlexWrapper'
import FooterBoxInfo from './FooterBoxInfo'
import MainBoxInfo from './MainBoxInfo'
import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { BiLogoMongodb, BiLogoNodejs, BiLogoWordpress, BiLogoRedux, BiLogoTypescript, BiLogoPhp } from 'react-icons/bi'

const ServicesWrapperInfo = () => {
  return (
    <FlexWrapper>
      <MainBoxInfo gap ='gap-4'>
        <IoLogoJavascript className='text-4xl text-yellow-400' />
        <FaReact className='text-4xl text-cyan-300' />
        <BiLogoRedux className='text-4xl text-red-500' />
        <BiLogoTypescript className='text-4xl text-blue-500' />
        <BiLogoNodejs className='text-4xl text-green-300' />
        <BiLogoMongodb className='text-4xl text-green-500' />
        <BiLogoPhp className='text-4xl text-purple-700' />
        <BiLogoWordpress className='text-4xl text-cyan-600' />
      </MainBoxInfo>
      <FooterBoxInfo url='/services' textInfo='what I do' textLink='Services Offering' />
    </FlexWrapper>
  )
}

export default ServicesWrapperInfo
