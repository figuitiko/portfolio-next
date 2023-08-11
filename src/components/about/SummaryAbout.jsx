import React from 'react'
import { FaCanadianMapleLeaf, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { BiLogoMongodb, BiLogoNodejs, BiLogoWordpress, BiLogoRedux, BiLogoTypescript, BiLogoPhp } from 'react-icons/bi'
import CommonShape from '../share/CommonShape'

const SummaryAbout = () => {
  return (
    <div className='w-full md:w-[65%] flex flex-col h-full md:h-[300px] justify-start gap-4'>
      <h2 className=' text-xl md:text-5xl uppercase w-full text-center dark:text-black animate-in fade-in duration-1000 animate-twice ease-in'>
        <FaCanadianMapleLeaf className='inline-block mr-2 dark:text-blue-600 animate-in spin-in-6 repeat-infinite duration-700 '/>
        Self-summary
        <FaCanadianMapleLeaf className='inline-block mr-2 dark:text-blue-600 animate-in spin-in-6 repeat-infinite duration-700'/>
      </h2>
      <CommonShape classCustom={'w-full h-full md:h-[80%] flex-col justify-end'}>
        <div className='flex gap-2 mb-auto'>
          <IoLogoJavascript className='text-2xl text-center  text-yellow-400 animate-bounce running' />
          <FaReact className='text-2xl text-center  text-cyan-300 animate-bounce running' />
          <BiLogoRedux className='text-2xl text-center  text-red-500 animate-bounce running' />
          <BiLogoTypescript className='text-2xl text-center  text-blue-500 animate-bounce running' />
          <BiLogoNodejs className='text-2xl text-center  text-green-300 animate-bounce running' />
          <BiLogoMongodb className='text-2xl text-center  text-green-500 animate-bounce running' />
          <BiLogoPhp className='text-2xl text-center  text-purple-700 animate-bounce running' />
          <BiLogoWordpress className='text-2xl text-center  text-cyan-600 animate-bounce running' />
        </div>
        <h3 className='text-3xl font-bold'>Frank Freeman</h3>
        <p>
        Experienced web developer with 15+ years in design, development, and testing. Proficient in Scrum,
        Symphony, Laravel, WordPress, Node.js, Vue.js, Angular, React. Strong team player, delivers results.<br/>
        <a className='text-right flex justify-end w-full text-blue-300 font-bold dark:text-blue-600' href='/docs/frank_Renato_freeman_Lopez_-_Web_Developer.pdf' target='_blank'>
          <span className='mr-2 '>Download CV</span>
        </a>
        </p>
      </CommonShape>
    </div>
  )
}

export default SummaryAbout
