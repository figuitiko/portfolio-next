import ExperienceItem from './ExperienceItem'

const CustomExperience = ({ title, experienceArrays }) => {
  return (
    <div className='flex h-full flex-col gap-4 overflow-x-auto w-full custom-scrollbar'>
      <h3>{ title }</h3>
      <div className='flex flex-col gap-2'>
        {
          experienceArrays.map((experience, index) => {
            return (
              <ExperienceItem key={index} experience={experience} />
            )
          })
        }
      </div>
    </div>
  )
}

export default CustomExperience
