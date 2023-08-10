import Image from 'next/image'

const PictureWrapperShare = ({ imgName, height, width }) => {
  return (
    <>
      {
        <picture className='flex justify-center w-full'>
          <Image src={`/images/${imgName}`} alt='Team Members' width={height} height={width} className='rounded-2xl object-cover w-full' />
        </picture>
      }
    </>
  )
}

export default PictureWrapperShare
