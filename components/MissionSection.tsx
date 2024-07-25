import React from 'react'
import Section from './Section'
import MissionBox from './MissionBox'

type Props = {}

const MissionSection = (props: Props) => {
  return (
    <Section title='Our Mission'>
      <MissionBox title="Hello  " subtitle="This is my first"/>


    </Section>
  )
}

export default MissionSection