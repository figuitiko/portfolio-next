'use client'

import { useTheme } from 'next-themes'
import FlexWrapper from '../share/FlexWrapper'
import FooterBoxInfo from './FooterBoxInfo'
import MainBoxInfo from './MainBoxInfo'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa'

const SocialInfoWrapper = () => {
  const { theme } = useTheme()
  return (
    <FlexWrapper >
      <MainBoxInfo>
        <div className={`flex flex-wrap justify-center items-center gap-4 p-4 rounded-2xl  border-cyan-50 border-opacity-5 ${theme === 'light' ? 'gradient-shape' : 'bg-gradient-to-r from-slate-400 to-slate-200'}  `}>
          <a href='https://www.facebook.com/frankrenato.freeman.5' target='_blank' rel='noreferrer'>
            <FaFacebook className='text-4xl text-cyan-50 dark:text-slate-700' />
          </a>
          <a href='https://www.instagram.com/ffreeman07/' target='_blank' rel='noreferrer'>
            <FaInstagram className='text-4xl text-cyan-50 dark:text-slate-700' />
          </a>
          <a href='https://www.linkedin.com/in/frank-renato-freeman-lopez-32840b60/' target='_blank' rel='noreferrer'>
            <FaLinkedin className='text-4xl text-cyan-50 dark:text-slate-700' />
          </a>
          <a href='https://github.com/figuitiko' target='_blank' rel='noreferrer'>
            <FaGithub className='text-4xl text-cyan-50 dark:text-slate-700' />
          </a>
          <a href='https://stackoverflow.com/users/5909450/figuitiko' target='_blank' rel='noreferrer'>
            <FaStackOverflow className='text-4xl text-cyan-50 dark:text-slate-700' />
          </a>
        </div>
      </MainBoxInfo>
      <FooterBoxInfo url='/about' textInfo='stay we me' textLink='Profiles' />
    </FlexWrapper>
  )
}

export default SocialInfoWrapper
