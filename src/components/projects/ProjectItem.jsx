import FooterBoxInfo from '../home/FooterBoxInfo'
import LinkComponent from '../share/LinkComponent'
import PictureWrapperShare from '../share/PictureWrapperShare'

const ProjectItem = ({ imgName, height, width, isClickAble = false, linkUrl = false, textInfo, url }) => {
  console.log({ url })
  return (
    <LinkComponent isExternal = {true} height={height} width={width} href={url} >
      <div className='flex flex-col gap-8'>
        <PictureWrapperShare imgName={imgName} height={height} width={width} isClickAble={isClickAble} linkUrl={url} />
        <FooterBoxInfo url={linkUrl} textInfo={textInfo} textLink={textInfo} />
      </div>
    </LinkComponent>
  )
}

export default ProjectItem
