import React from 'react'
import Section from './Section'
import RecyclingCard from './RecyclingCard'

type Props = {}

const RecyclingFacilitiesSection = (props: Props) => {
  return (
    <Section title='Recycling Facilities'>
        <div className='flex'>
            <RecyclingCard title='ECO-BUSINESS_CAMBODIA' subtitle='Geography Integration Recycle' image='/assets/toadbag.png'/>
            <RecyclingCard title='ECO-BUSINESS_CAMBODIA' subtitle='Geography Integration Recycle' image='/assets/toadbag.png'/>
            <RecyclingCard title='ECO-BUSINESS_CAMBODIA' subtitle='Geography Integration Recycle' image='/assets/toadbag.png'/>
            <RecyclingCard title='ECO-BUSINESS_CAMBODIA' subtitle='Geography Integration Recycle' image='/assets/toadbag.png'/>
        </div>
    </Section>
  )
}

export default RecyclingFacilitiesSection