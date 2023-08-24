import React from 'react'
import './travelStyles.scss'
import ContentCard from '../contentCard/ContentCard'

import GridCard from '../gridCard/GridCard'
const TravelStyles = () => {
  return (
    <div className='travelSection'>
      <ContentCard number={"03."} title={"TRAVEL STYLES"}/>
      <div className='gridImages'>
        <GridCard />
      </div>
    </div>
  )
}

export default TravelStyles