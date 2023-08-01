import { LuClipboardSignature } from 'react-icons/lu'
import FooterBoxInfo from './FooterBoxInfo'
import MainBoxInfo from './MainBoxInfo'
import FlexWrapper from '../share/FlexWrapper'

const SignatureWrapper = () => {
  return (
      <FlexWrapper flexDirection='row' justify='flex-start' align='flex-start' height='100%' width='100%'>
        <MainBoxInfo>
          <LuClipboardSignature className='text-7xl text-slate-50/70' />
        </MainBoxInfo>
        <FooterBoxInfo url='/about' textInfo='More about me' textLink='Credentials' />
      </FlexWrapper>
  )
}

export default SignatureWrapper
