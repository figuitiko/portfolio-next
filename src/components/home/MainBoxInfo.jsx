import React from 'react'

const MainBoxInfo = ({ children, gap }) => {
  return (
    <div className={'flex justify-center items-center w-full h-3/4 relative' + ' ' + gap}>
       { children }
    </div>
  )
}

export default MainBoxInfo
