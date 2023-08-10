import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import LinkComponent from '../share/LinkComponent'

const FooterBoxInfo = ({ url, textInfo, textLink, isExternal, isLinkable = false }) => {
  return (
    <div className='flex w-full'>
        <div className='flex flex-col'>
          <span className='uppercase text-extra-small font-bold'> { textInfo } </span>
          {
            isLinkable
              ? (
              <LinkComponent isExternal={isExternal} href={url}>{textLink}</LinkComponent>
                )
              : (
              <span className='text-extra-small font-bold'> {textLink} </span>
                )
          }
        </div>
        <div className='ml-auto flex  items-end justify-end'>
          {
          isLinkable
            ? (
              <LinkComponent isExternal={isExternal} href={url}>
                <BiArrowToRight className='text-2xl md:text-4xl text-slate-50/70 dark:text-slate-700' />
              </LinkComponent>
              )
            : (
              <BiArrowToRight className='text-2xl md:text-4xl text-slate-50/70 dark:text-slate-700' />
              )
        }
        </div>
      </div>
  )
}

export default FooterBoxInfo
