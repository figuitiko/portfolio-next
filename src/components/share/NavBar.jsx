import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='flex flex-col md:flex-row  md:gap-12  self-center'>
      <Link href='/'> Home </Link>
      <Link href='/about'> About </Link>
      <Link href='/projects'> Works </Link>
      <Link href='/contact'> Contact </Link>
    </nav>
  )
}

export default NavBar
