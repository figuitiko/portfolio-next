'use client'

import FlexWrapper from '../share/FlexWrapper'
import FooterBoxInfo from './FooterBoxInfo'
import MainBoxInfo from './MainBoxInfo'
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa'

const SocialInfoWrapper = () => {
  return (
    <FlexWrapper >
      <MainBoxInfo>
        <div className={'flex flex-wrap justify-center items-center gap-4 p-4 rounded-2xl  border-cyan-50 border-opacity-5  bg-[linear-gradient(to_bottom,#1f1e1e,#272626,#302f2f,#393838,#424141)] dark:bg-[linear-gradient(to_bottom,#f6f6f6,#f3f5f6,#eef4f4,#ecf2ef,#eef0e9)]'}>
          <a href='https://www.linkedin.com/in/frank-renato-freeman-lopez-32840b60/' target='_blank' rel='noreferrer'>
            <FaLinkedin className='text-4xl text-blue-400' />
          </a>
          <a href='https://github.com/figuitiko' target='_blank' rel='noreferrer'>
            <FaGithub className='text-4xl text-slate-900' />
          </a>
          <a href='https://stackoverflow.com/users/5909450/figuitiko' target='_blank' rel='noreferrer'>
            <FaStackOverflow className='text-4xl text-yellow-500' />
          </a>
        </div>
      </MainBoxInfo>
      <FooterBoxInfo url='/about' textInfo='stay we me' textLink='Profiles' />
    </FlexWrapper>
  )
}

export default SocialInfoWrapper
