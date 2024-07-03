import React from 'react'
import CommonShape from '../share/CommonShape'
import { FaEnvelope, FaPhoneVolume, FaMapMarker } from 'react-icons/fa'
const contactIcons = {
  envelope: <FaEnvelope className='text-4xl dark:text-blue-600' />,
  phone: <FaPhoneVolume className='text-4xl dark:text-blue-600' />,
  marker: <FaMapMarker className='text-4xl dark:text-blue-600' />
}

const ContactItem = ({ icon, heading, subtitles, href }) => {
  return (
    <div className='flex gap-4 w-fit'>
      <CommonShape classCustom={'contact-item'}>
        {
          href
            ? (
              <a href={href} target='_blank' rel='noreferrer'>
                {contactIcons[icon]}
              </a>
              )
            : contactIcons[icon]
        }
      </CommonShape>
        <div className='flex flex-col  justify-center'>
          <h3 className='text-2xl font-semibold  dark:text-blue-600 '>{heading}</h3>
          {
            subtitles.map((subtitle, index) => (
              <p key={index} className='text-gray-600 dark:text-gray-300'>{subtitle}</p>
            ))
          }
        </div>
    </div>
  )
}

export default ContactItem
