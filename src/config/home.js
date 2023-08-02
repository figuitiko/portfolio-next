import CallToActions from '@/components/home/CallToActions'
import ContactInfoWrapper from '@/components/home/ContactInfoWrapper'
import InfoClients from '@/components/home/InfoClients'
import PictureWrapper from '@/components/home/PictureWrapper'
import ProjectsWrapper from '@/components/home/ProjectsWrapper'
import ServicesWrapperInfo from '@/components/home/ServicesWrapperInfo'
import SignatureWrapper from '@/components/home/SignatureWrapper'
import SocialInfoWrapper from '@/components/home/SocialInfoWrapper'
import MarqueeText from '@/components/share/MarqueeText'

const homeConfig =
{
  section1: [
    {
      component: 'CommonShape',
      props: {
        classCustom: 'block-home-first-line',
        children: (
          <PictureWrapper />
        )
      }
    },
    {
      component: 'GridWrapperInside',
      props: {
        width: '48%',
        classCustom: 'wrapper-home-inside',
        arrOfShapes: [
          {
            component: 'CommonShape',
            props: {
              classCustom: 'block-home-inside-first-line',
              children: (
               <MarqueeText text = 'latest work and featured, projects' />
              )
            }
          },
          {
            component: 'CommonShape',
            props: {
              classCustom: 'block-home-inside-first-line-1',
              children: (
              <SignatureWrapper />
              )
            }
          },
          {
            component: 'CommonShape',
            props: {
              classCustom: 'block-home-inside-first-line-1',
              children: (
               <ProjectsWrapper />
              )
            }
          }
        ]
      }
    },
    {
      component: 'CommonShape',
      props: {
        classCustom: 'block-home-second-line',
        children: (
          <ContactInfoWrapper />
        )
      }
    },
    {
      component: 'CommonShape',
      props: {
        classCustom: 'block-home-second-line-1',
        children: (
          <ServicesWrapperInfo />
        )
      }
    },
    {
      component: 'CommonShape',
      props: {
        classCustom: 'block-home-second-line',
        children: (
          <SocialInfoWrapper />
        )
      }
    },
    {
      component: 'CommonShape',
      props: {
        classCustom: 'block-home-second-line-1',
        children: (
          <InfoClients />
        )
      }
    },
    {
      component: 'CommonShape',
      props: {
        classCustom: 'block-home-second-line-1',
        padding: '0',
        children: (
        <CallToActions />
        )
      }
    }

  ]
}

export default homeConfig
