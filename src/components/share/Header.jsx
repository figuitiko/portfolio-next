import NavBar from './NavBar'
import ToggleButton from './ToggleButton'

const Header = () => {
  return (
    <header className='flex flex-col md:flex-row w-full md:w-[970px] justify-center md:justify-between  h-[200px] md:h-[120px] items-center'>
      <h3 className='text-3xl'>
        FFreeman
      </h3>
      <NavBar />
      <ToggleButton classCustom={'block-toggle-on-header'} />
    </header>
  )
}

export default Header
