import NavBar from './NavBar'
import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex w-full md:w-[800px] h-full flex-col p-8 justify-end'>
      <div className='flex flex-col gap-4 justify-center w-full items-center'>
        <h3 className='text-3xl font-bold dark:text-slate-700'>
          FFreeman
        </h3>
        <NavBar />
        <div className='text-extra-small text-center flex gap-2'>
         <FaCopyright />
         <span>all rights reserved {new Date().getFullYear()} by ffreeman</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
