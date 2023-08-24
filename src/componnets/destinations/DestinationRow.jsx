import React from 'react'
import './destinationRow.scss'
import ContentCard from '../contentCard/ContentCard'
import VideoCard from '../about/VideoCard'

const DestinationRow = () => {
  return (
    <div className='container'>
       <ContentCard number={"01."} title={"DESTINATIONS"} />
       <div className='videoCardContainer'>
       <VideoCard title={"HONG KONG"} src={"https://player.vimeo.com/progressive_redirect/playback/825329750/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=b69360c7aafbb5711cfdb2e2b82d45a5054ef41b7791c875c61e9c9e16d2bf29"}/>
          <VideoCard title={"NORWAY"} src={"https://player.vimeo.com/external/559880023.sd.mp4?s=7445cd904634755802174ff794f2098ad80967f1&profile_id=165&oauth2_token_id=57447761"}/>

       </div>
    </div>
  )
}

export default DestinationRow