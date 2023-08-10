import ProjectItem from '@/components/projects/ProjectItem'

export const lefSide = [
  {
    component: 'CommonShape',
    props: {
      classCustom: 'block-about-first-line block-project-first-line',
      children: (
        <ProjectItem
          imgName='acygp.png'
          width={200} height={220}
          textInfo={'Acygp Website'}
          isClickAble={true}
          url ={'https://acygp.com/'}
          isExternal={true}
          isLinkable = {false}
          />
      )
    }
  },
  {
    component: 'CommonShape',
    props: {
      classCustom: 'block-about-first-line block-project-first-line',
      children: (
        <ProjectItem
          imgName='ofl.png'
          width={200} height={220}
          textInfo={'Ofl Website'}
          isClickAble={true}
          url ={'http://oflcorp.com/'}
          isExternal={true}
          isLinkable = {false}
          />
      )
    }
  }
]

export const rightSide = [
  {
    component: 'CommonShape',
    props: {
      classCustom: 'block-about-first-line block-project-first-line',
      children: (
        <ProjectItem
          imgName='ip-tracker.png'
          width={200} height={220}
          textInfo={'Ip tracker'}
          isClickAble={true}
          url ={'https://figuitiko.github.io/ip-tracker/'}
          isExternal={true}
          isLinkable = {false}
          />
      )
    }
  },
  {
    component: 'CommonShape',
    props: {
      classCustom: 'block-about-first-line block-project-first-line',
      children: (
        <ProjectItem
          imgName='age-calculator.png'
          width={200} height={220}
          textInfo={'Age Calculator'}
          isClickAble={true}
          url ={'https://figuitiko.github.io/age-calculator/'}
          isExternal={true}
          isLinkable = {false}
          />
      )
    }
  },
  {
    component: 'CommonShape',
    props: {
      classCustom: 'block-about-first-line block-project-first-line',
      children: (
        <ProjectItem
          imgName='inpit-chatbot.png'
          width={200} height={220}
          textInfo={'INPI Menstrual Calculator'}
          isClickAble={true}
          url ={'https://chatbot-inpi.com/'}
          isExternal={true}
          isLinkable = {false}
          />
      )
    }
  },
  {
    component: 'CommonShape',
    props: {
      classCustom: 'block-about-first-line block-project-first-line',
      children: (
        <ProjectItem
          imgName='works.png'
          width={200} height={220}
          textInfo={'Sports Blog'}
          isClickAble={true}
          url ={'https://monchi-blog.vercel.app/'}
          isExternal={true}
          isLinkable = {false}
          />
      )
    }
  }
]
