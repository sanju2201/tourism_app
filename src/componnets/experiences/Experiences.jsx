import React from 'react'
import './experiences.scss'
import ContentCard from '../contentCard/ContentCard'
import GridCard from '../gridCard/GridCard'
const Experiences = () => {
  return (
    <div className='experiencesSection'>
      <div className='gridImages'>
        <GridCard />
      </div>
      <ContentCard number={"02."} title={"EXPERIENCES"}/>
    </div>
  )
}

export default Experiences