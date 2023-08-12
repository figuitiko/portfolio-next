import ContactForm from '@/components/contact/ContactForm'

const contactConfig = [
  {
    component: 'ContactListItems'
  },
  {
    component: 'CommonShape',
    props: {
      classCustom: 'contact-form-wrapper',
      children: (
       <ContactForm />
      )
    }
  }
]

export default contactConfig
