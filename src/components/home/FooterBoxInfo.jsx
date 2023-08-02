import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import Link from 'next/link'

const FooterBoxInfo = ({ url, textInfo, textLink }) => {
  return (
    <div className='flex w-full'>
        <div className='flex flex-col'>
          <span className='uppercase text-extra-small font-bold'> { textInfo } </span>
          <Link href={ url }>{ textLink }</Link>
        </div>
        <div className='ml-auto flex  items-end justify-end'>
          <Link href={ url}>
            <BiArrowToRight className='text-2xl md:text-4xl text-slate-50/70' />
          </Link>
        </div>
      </div>
  )
}

export default FooterBoxInfo
