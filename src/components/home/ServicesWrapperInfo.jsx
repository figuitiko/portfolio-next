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
        <IoLogoJavascript className='text-4xl text-cyan-50 dark:text-slate-700' />
        <FaReact className='text-4xl text-cyan-50 dark:text-slate-700' />
        <BiLogoRedux className='text-4xl text-cyan-50 dark:text-slate-700' />
        <BiLogoTypescript className='text-4xl text-cyan-50 dark:text-slate-700' />
        <BiLogoMongodb className='text-4xl text-cyan-50 dark:text-slate-700' />
        <BiLogoNodejs className='text-4xl text-cyan-50 dark:text-slate-700' />
        <BiLogoWordpress className='text-4xl text-cyan-50 dark:text-slate-700' />
        <BiLogoPhp className='text-4xl text-cyan-50 dark:text-slate-700' />
      </MainBoxInfo>
      <FooterBoxInfo url='/services' textInfo='what I do' textLink='Services Offering' />
    </FlexWrapper>
  )
}

export default ServicesWrapperInfo
