import React from 'react'
import './contentCard.scss'
import BookmarkIcon from '@mui/icons-material/Bookmark';

const ContentCard = ({number, title}) => {
  return (
    <div className='contentCard'>
      <div className='cardLeft'>
        <div className='number'>{number}</div>
      </div>
      <div className='cardRight'>
        <div className='title'>{title}</div>
        <hr />
        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, numquam omnis. Explicabo, voluptate sapiente ipsa provident quas impedit ducimus eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias ab nihil facere error modi. Incidunt, quae voluptates dignissimos nobis eveniet consectetur officiis culpa temporibus.</div>
        <div className='button'>
          <div className='bookmark'><BookmarkIcon className='icon' /></div>
          <div className='showmore'>SHOW MORE</div>
        </div>
      </div>
    </div>
  )
}

export default ContentCard