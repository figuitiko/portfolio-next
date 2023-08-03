import { LuClipboardSignature } from 'react-icons/lu'
import FooterBoxInfo from './FooterBoxInfo'
import MainBoxInfo from './MainBoxInfo'
import FlexWrapper from '../share/FlexWrapper'

const SignatureWrapper = () => {
  return (
      <FlexWrapper>
        <MainBoxInfo>
          <LuClipboardSignature className='text-7xl text-slate-50/70 dark:text-slate-700' />
        </MainBoxInfo>
        <FooterBoxInfo url='/about' textInfo='More about me' textLink='Credentials' />
      </FlexWrapper>
  )
}

export default SignatureWrapper
