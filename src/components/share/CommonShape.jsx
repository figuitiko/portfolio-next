'use client'

const CommonShape = ({ children, classCustom }) => {
  return (
    <div className={`flex  bg-[linear-gradient(to_bottom,#1f1e1e,#272626,#302f2f,#393838,#424141)] dark:bg-[linear-gradient(to_right,#f6f6f6,#f5f7f8,#f3f8f9,#f3f9f6,#f7f9f2)] hover:scale-105 ease-in-out duration-300 rounded-2xl w-[100px] h-[100px] p-4 gap-1 dark:text-slate-700   ${classCustom}`} >
      {children}
    </div>
  )
}

export default CommonShape
