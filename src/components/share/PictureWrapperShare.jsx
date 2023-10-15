import Image from 'next/image'

const PictureWrapperShare = ({ imgName, height, width }) => {
  return (
    <>
      {
        <picture className='flex justify-center w-full  overflow-hidden max-w-[200px] max-h-[200px]'>
          <Image src={`/images/${imgName}`} alt='Team Members' width={height} height={width} className='rounded-2xl object-cover' priority = {true} />
        </picture>
      }
    </>
  )
}

export default PictureWrapperShare
