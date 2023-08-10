import CustomExperience from '@/components/about/CustomExperience'
import ContactInfoWrapper from '@/components/home/ContactInfoWrapper'
import ServicesWrapperInfo from '@/components/home/ServicesWrapperInfo'
import SocialInfoWrapper from '@/components/home/SocialInfoWrapper'
import PictureWrapperShare from '@/components/share/PictureWrapperShare'

const experiences = [
  {
    title: 'Full Stack Web Developer',
    subTitle: 'Softeq',
    years: '2023 - Present'
  },
  {
    title: 'Full Stack Web Developer',
    subTitle: 'Baja  Technologies',
    years: '2022 - 2023'
  },
  {
    title: 'Full Stack Web Developer',
    subTitle: 'NearShoreTechnologies',
    years: '2021 - 2022'
  },
  {
    title: 'Full Stack Web Developer',
    subTitle: '014 Group',
    years: '2020 - 2021'
  },
  {
    title: 'Full Stack Web Developer',
    subTitle: 'OPTIMAL BIT LLC',
    years: '2019 - 2020'
  },
  {
    title: 'Full Stack Web Developer',
    subTitle: 'Mail Company of Cuba',
    years: '2019 - 2020'
  }
]

const educations = [
  {
    title: 'Bachelor of Science in Computer Science',
    subTitle: 'University of Havana',
    years: '2002 - 2007'
  },
  {
    title: 'Business Administration Speciality',
    subTitle: 'Catholic University of Murcia; Spain',
    years: '2012 - 2013'
  }
]

const aboutConfig = [
  {
    component: 'CommonShape',
    props: {
      classCustom: 'block-about-first-line',
      children: (
        <PictureWrapperShare imgName='perfil2.jpeg' width={200} height={200} />
      )
    }
  },
  {
    component: 'SummaryAbout'
  },
  {
    component: 'CommonShape',
    props: {
      classCustom: 'block-about-second-line',
      children: (
        <CustomExperience title = 'Experience' experienceArrays = {experiences} />
      )
    }
  },
  {
    component: 'CommonShape',
    props: {
      classCustom: 'block-about-second-line',
      children: (
        <CustomExperience title = 'Education' experienceArrays = {educations} />
      )
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
  }
]

export default aboutConfig
