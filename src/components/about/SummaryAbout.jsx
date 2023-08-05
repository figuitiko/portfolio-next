import React from 'react'
import { FaCanadianMapleLeaf, FaReacteurope } from 'react-icons/fa'
import CommonShape from '../share/CommonShape'

const SummaryAbout = () => {
  return (
    <div className='w-full md:w-[65%] flex flex-col h-full md:h-[300px] justify-start gap-4'>
      <h2 className=' text-xl md:text-5xl uppercase w-full text-center dark:text-slate-500 animate-in fade-in duration-1000 animate-twice ease-in'>
        <FaCanadianMapleLeaf className='inline-block mr-2'/>
        Self-summary
        <FaCanadianMapleLeaf className='inline-block mr-2'/>
      </h2>
      <CommonShape classCustom={'w-full h-full md:h-[80%] flex-col justify-end'}>
      <FaReacteurope className='text-2xl text-center  mb-auto'/>
        <h3 className='text-3xl font-bold'>Frank Freeman</h3>
        <p>
        Experienced web developer with 15+ years in design, development, and testing. Proficient in Scrum,
        Symphony, Laravel, WordPress, Node.js, Vue.js, Angular, React. Strong team player, delivers results.
        </p>
      </CommonShape>
    </div>
  )
}

export default SummaryAbout
