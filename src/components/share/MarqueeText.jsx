import React from 'react'

const MarqueeText = ({ text }) => {
  return (
    <marquee className='uppercase text-sm'>{text}</marquee>
  )
}

export default MarqueeText
