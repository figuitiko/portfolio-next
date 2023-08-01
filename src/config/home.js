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
        width: '48%',
        height: '260px',
        padding: '2rem',
        gap: '2rem',
        alignItems: 'center',
        justify: 'center',
        children: (
          <PictureWrapper />
        )
      }
    },
    {
      component: 'GridWrapperInside',
      props: {
        width: '48%',
        height: '255px',
        gap: '1rem',
        justify: 'space-between',
        arrOfShapes: [
          {
            component: 'CommonShape',
            props: {
              width: '100%',
              height: '20%',
              alignItems: 'center',
              children: (
               <MarqueeText text = 'latest work and featured, projects' />
              )
            }
          },
          {
            component: 'CommonShape',
            props: {
              width: '47%',
              height: '75%',
              children: (
              <SignatureWrapper />
              )
            }
          },
          {
            component: 'CommonShape',
            props: {
              width: '47%',
              height: '75%',
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
        width: '23%',
        height: '220px',
        children: (
          <ContactInfoWrapper />
        )
      }
    },
    {
      component: 'CommonShape',
      props: {
        width: '48%',
        height: '220px',
        children: (
          <ServicesWrapperInfo />
        )
      }
    },
    {
      component: 'CommonShape',
      props: {
        width: '23%',
        height: '220px',
        children: (
          <SocialInfoWrapper />
        )
      }
    },
    {
      component: 'CommonShape',
      props: {
        width: '48%',
        height: '220px',
        children: (
          <InfoClients />
        )
      }
    },
    {
      component: 'CommonShape',
      props: {
        width: '48%',
        height: '220px',
        padding: '0',
        children: (
        <CallToActions />
        )
      }
    }

  ]
}

export default homeConfig
