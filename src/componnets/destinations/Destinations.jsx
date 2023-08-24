import React from 'react'
import "./destinations.scss"
import CardRow from './CardRow'
import DestinationRow from './DestinationRow'

const Destinations = () => {
  return (
    <div className='destinationContainer'>
      <CardRow />
      <DestinationRow />
    </div>
  )
}

export default Destinations