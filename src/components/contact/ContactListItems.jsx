import React from 'react'
import ContactItem from './ContactItem'
import CommonShape from '../share/CommonShape'
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa'

const ContactListItems = () => {
  return (
    <div className="flex flex-col gap-8 w-fit mx-auto md:mx-0">
      <ContactItem
        icon="envelope"
        heading="Mail Me"
        subtitles={['frankfigao@gmail.com']}
        href={
          'mailto:frankfigao@gmail.com?subject=Hello%20World&body=Hi%20there,%20I%20wanted%20to%20reach%20out%20to%20you.%20'
        }
      />
      <ContactItem
        icon="phone"
        heading="Contact me"
        subtitles={['+52 246-106-2041']}
        href={'tel:++522461062041'}
      />
      <ContactItem icon="marker" heading="location" subtitles={['México']} />
      <div className="flex flex-wrap gap-4 mt-8">
        <CommonShape classCustom={'social-contact'}>
          <a
            href="https://www.linkedin.com/in/frank-renato-freeman-lopez-32840b60/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-4xl text-blue-400" />
          </a>
        </CommonShape>
        <CommonShape classCustom={'social-contact'}>
          <a
            href="https://github.com/figuitiko"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-4xl text-slate-900" />
          </a>
        </CommonShape>
        <CommonShape classCustom={'social-contact'}>
          <a
            href="https://stackoverflow.com/users/5909450/figuitiko"
            target="_blank"
            rel="noreferrer"
          >
            <FaStackOverflow className="text-4xl text-yellow-500" />
          </a>
        </CommonShape>
      </div>
    </div>
  )
}

export default ContactListItems
