import FlexWrapper from '../share/FlexWrapper'
import MainBoxInfo from './MainBoxInfo'
import FooterBoxInfo from './FooterBoxInfo'
import Image from 'next/image'

const ContactInfoWrapper = () => {
  return (
    <FlexWrapper flexDirection='row' justify='flex-start' align='flex-start' height='100%' width='100%'>
      <MainBoxInfo>
        <picture>
          <Image src='/images/contact-img.jpg' alt='Contact' width={200} height={100} className='object-cover h-full w-full' />
        </picture>
      </MainBoxInfo>
      <FooterBoxInfo url='/contact' textInfo='be in touch' textLink='Contact' />
    </FlexWrapper>
  )
}

export default ContactInfoWrapper
