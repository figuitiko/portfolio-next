import React from 'react'

const ExperienceItem = ({ experience }) => {
  const { years, title, subTitle } = experience
  return (
    <div className='flex flex-col'>
      <span className='text-[#7d7d7d]'>{years}</span>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='text-smaller'>{subTitle}</p>
    </div>
  )
}

export default ExperienceItem
