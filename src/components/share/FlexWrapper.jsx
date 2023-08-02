import React from 'react'

const FlexWrapper = ({ children, classCustom }) => {
  return (
    <div className={`flex flex-col w-full h-full justify-start items-start gap-0 ${classCustom}`} >
      {children}
    </div>
  )
}

export default FlexWrapper
