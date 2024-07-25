import React from 'react'
import Section from './Section'
import BlogBox from './BlogBox'
type Props = {}

const BlogSection = (props: Props) => {
  return (
    <Section title='Our Blogs' >
      <BlogBox title='empty space for text' subtitle='Freetext'/>

      </Section>
    
  )
}

export default BlogSection