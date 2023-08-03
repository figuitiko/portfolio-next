import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='flex flex-col md:flex-row w-full md:w-[970px] justify-center md:justify-between  h-[200px] md:h-[120px] items-center'>
      <h3 className='text-3xl font-bold dark:text-slate-700'>
        FFreeman
      </h3>
      <NavBar />
    </header>
  )
}

export default Header
