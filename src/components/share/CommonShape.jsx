'use client'

const CommonShape = ({ children, classCustom }) => {
  return (
    <div className={`flex gradient-shape hover:scale-105 ease-in-out duration-300 rounded-2xl w-[100px] h-[100px] p-4 gap-1   ${classCustom}`} >
      {children}
    </div>
  )
}

export default CommonShape
