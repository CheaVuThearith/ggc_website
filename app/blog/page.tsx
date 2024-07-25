import React from 'react'
import BlogPost from '@/components/BlogPage/BlogPost'

type Props = {}

const BlogPage = (props: Props) => {
  return (
<>
<div className='flex flex-row justify-between space-x-2 md:flex-row'>
  <BlogPost describtion='26 july 2024' title='ghbargaeilgreagera' subtitle='Freetext' image='https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg'/>
  <BlogPost describtion='26 august 2024' title='Enjoy recycle' subtitle='Freefhjxgyjxyktgyjdtkytgfhgyvktfgukytfukyctujy6text' image='https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg'/>
  <BlogPost describtion='26 july 2028' title='Recycle' subtitle='Freetext' image='https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg'/>
  <BlogPost describtion='26 july 2025' title='Recycle' subtitle='Freetext' image='https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg'/>

</div>

</>
  )
}

export default BlogPage