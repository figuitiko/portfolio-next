import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='flex gap-12'>
      <Link href='/'> Home </Link>
      <Link href='/about'> About </Link>
      <Link href='/projects'> Works </Link>
      <Link href='/contact'> Contact </Link>
    </nav>
  )
}

export default NavBar
