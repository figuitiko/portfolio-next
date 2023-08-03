import FlexWrapper from '../share/FlexWrapper'
import MainBoxInfo from './MainBoxInfo'
import Image from 'next/image'
import FooterBoxInfo from './FooterBoxInfo'

const ProjectsWrapper = () => {
  return (
    <FlexWrapper >
      <MainBoxInfo>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='uppercase text-slate-50/70 dark:text-slate-700 text-xl md:text-2xl font-bold'>My Works</h3>
          <picture className='top-4 left-[30%] z-20  mx-auto mt-[-10px]  md:mt-[-15px] overflow-hidden'>
            <Image src='/images/works.png' alt='My Works' width={80} height={80} className='object-cover h-full w-full' />
          </picture>
        </div>
      </MainBoxInfo>
      <FooterBoxInfo url='/projects' textInfo='Showcase' textLink='Projects' />
    </FlexWrapper>
  )
}

export default ProjectsWrapper
