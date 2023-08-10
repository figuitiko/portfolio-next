import Link from 'next/link'

const LinkComponent = ({ isExternal = false, href, children, width, height }) => {
  const style = { height, width }
  return (
    <>
      {
        isExternal
          ? (<a href={href} target='_blank' rel='noreferrer' className='flex flex-1' style={style}>
            {children}
          </a>)
          : (
            <Link href={href} style={style}>
              {children}
            </Link>
            )
      }
    </>
  )
}

export default LinkComponent
