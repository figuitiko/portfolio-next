import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='flex w-[980px] justify-between h-[120px] items-center'>
      <h3 className='text-3xl'>
        FFreeman
      </h3>
      <NavBar />
      <h4>actions</h4>
    </header>
  )
}

export default Header
