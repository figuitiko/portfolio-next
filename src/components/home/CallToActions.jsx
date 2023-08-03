import Image from 'next/image'
import Link from 'next/link'
import { BiArrowToRight } from 'react-icons/bi'

const CallToActions = () => {
  return (
    <>
      <picture className='absolute w-[80px] h-[100px] mt-[-12px] dark:hidden'>
        <Image src='/images/isignia.png' alt='cta-bg' layout='fill' />
      </picture>
      <div className='flex  justify-center items-center mt-auto w-full'>
        <h2 className='text-3xl font-bold  ml-4 mb-4'>
          Lets <br/> work <span className='text-cyan-300'>together</span>
        </h2>
        <Link href='/contact' className='ml-auto mr-4 '>
            <BiArrowToRight className='text-4xl text-slate-50/70 dark:text-slate-700' />
          </Link>
      </div>
    </>
  )
}

export default CallToActions
