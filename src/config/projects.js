import ProjectItem from '@/components/projects/ProjectItem'

export const lefSide = [
  {
    component: 'CommonShape',
    props: {
      classCustom: 'block-about-first-line block-project-first-line',
      children: (
        <ProjectItem
          imgName='educatec.png'
          width={200} height={220}
          textInfo={'Instituto Educatec website'}
          textStatus={'Ready'}
          isClickAble={true}
          url ={'https://www.instituto-educatec.org/'}
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
          textStatus={'In Progress'}
          isClickAble={true}
          url ={'https://monchi-blog.vercel.app/'}
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
          imgName='rick-morty.png'
          width={200} height={220}
          textInfo={'Rick and Morty'}
          textStatus={'Ready'}
          isClickAble={true}
          url ={'https://rick-morty-sigma-one.vercel.app/'}
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
          imgName='ipTracker.png'
          width={200} height={220}
          textInfo={'Ip tracker'}
          textStatus={'Ready'}
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
          textStatus={'Ready'}
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
          imgName='dashboard.png'
          width={200} height={220}
          textInfo={'bets dashboard'}
          textStatus={'Ready'}
          isClickAble={true}
          url ={'https://cut-betting.vercel.app/dashboard'}
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
          imgName='xocen.png'
          width={200} height={220}
          textInfo={'Xocen Birding website'}
          textStatus={'In progress'}
          isClickAble={true}
          url ={'https://xocen-next.vercel.app'}
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
          imgName='react-challenges.png'
          width={200} height={220}
          textInfo={'React Challenges'}
          textStatus={'In Progress'}
          isClickAble={true}
          url ={'https://react-challennges.vercel.app/'}
          isExternal={true}
          isLinkable = {false}
          />
      )
    }
  }
]
