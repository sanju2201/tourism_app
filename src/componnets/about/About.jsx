import React from 'react'
import './about.scss'
import VideoCard from './VideoCard';

const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='topSection'>
        <div className='content'>
          <h3>Take the world for a ride</h3>
       
        </div>
      </div>
      <div className='bottomSection'>
        <div className='bottomLeft'>
        <div className='content'>
          <h3>journeys that can't be beat</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nulla deserunt autem illo quidem, iste quas consectetur eos voluptatum, non iusto tenetur perspiciatis animi amet suscipit optio dolor! Eaque non quaerat dignissimos saepe nisi inventore nesciunt nam quisquam, delectus alias nihil reprehenderit obcaecati, iusto nemo aut vel laudantium expedita autem?</p>
        </div>
        </div>
        <div  className='bottomRight'>
          <VideoCard title={"HONG KONG"} src={"https://player.vimeo.com/progressive_redirect/playback/825329750/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=b69360c7aafbb5711cfdb2e2b82d45a5054ef41b7791c875c61e9c9e16d2bf29"}/>
          <VideoCard title={"NORWAY"} src={"https://player.vimeo.com/external/559880023.sd.mp4?s=7445cd904634755802174ff794f2098ad80967f1&profile_id=165&oauth2_token_id=57447761"}/>
          <VideoCard title={"BELARUS"} src={"https://player.vimeo.com/progressive_redirect/playback/704843127/rendition/540p?loc=external&oauth2_token_id=57447761&signature=3ea8745f5f220a09c67eede1a8b1442b7dd231989c6caf61405494a25f536839"}/>
          <VideoCard title={"BAHRAIN"} src={"https://player.vimeo.com/progressive_redirect/playback/798204134/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=bfb3467730b2657679a5dc79d2342e39ace903aeb053be77272d044d16960b7d"}/>


        </div>
      </div>
    </div>
  )
}

export default About;