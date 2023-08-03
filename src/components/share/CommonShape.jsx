'use client'

import { useTheme } from 'next-themes'

const CommonShape = ({ children, classCustom }) => {
  const { theme } = useTheme()
  return (
    <div className={`flex ${(theme === 'light' || !theme) ? 'gradient-shape' : 'bg-gradient-to-r from-slate-400 to-slate-200'}  hover:scale-105 ease-in-out duration-300 rounded-2xl w-[100px] h-[100px] p-4 gap-1 dark:text-slate-700   ${classCustom}`} >
      {children}
    </div>
  )
}

export default CommonShape
