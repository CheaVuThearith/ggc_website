import React from 'react'
import Section from './Section'
import ContactCard from './ContactCard'

type Props = {}

const ContactSection = (props: Props) => {
  return (
    <Section title='Contact Us'>
        <ContactCard></ContactCard>

    </Section>
  )
}

export default ContactSection