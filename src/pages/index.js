import React from "react"
// import ReactAudioPLayer from 'react-audio-player'
// import Sound from 'react-sound';
// import AudioPlayer from "react-h5-audio-player";
// import AudioPlayer from 'react-responsive-audio-player';
// import MusicPlayer from 'react-responsive-music-player'
import AudioPlayer from 'react-playlist-player'
import { toggleAudio } from 'react-playlist-player'

import PageHeader from "../components/page_header"
import band from "../images/band.jpg"
import nate from "../images/nate.jpg"
import cass from "../images/cass.jpg"
import mike from "../images/mike.jpg"
import sam from "../images/sam.jpg"
import './index.css'

const currentPlayList = {
    playlistCoverUrl: '../images/missed_connections.jpg',
    playlistName: 'Sample tracks',
    bandName: 'TCT',
    songs: [
      {
        position: '1',
        songName: 'In The City',
        songUrl: 'http://nebula.wsimg.com/788d768a30ec760f31e1cdc18418d0d8?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio'
      },
      {
        position: '2',
        songName: 'Rufus',
        songUrl: 'http://nebula.wsimg.com/ebddcff358e271a11c11063583e84812?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio'
      },
    ],
    type: 'playlist'
  }

export default () => (
    <div>
        <PageHeader />
        <div>
            <img className='hero-image' src={band} alt="" />
        <div>
            <AudioPlayer currentPlayList={currentPlayList} onToggleAudio={audioPlaying => console.log(audioPlaying)} />
        </div>
            
        <div className='divider-heading'>
            <h2>Upcoming Shows</h2>
        </div>
        <div>January 26th  @ Marmot Arena Denver, CO 8pm - 11pm</div>
        <div>January 28th @ Red Rocks Amphitheater Morrison, CO 10pm - 1am</div>
        
        <div className='divider-heading'>
            <h2>The Band</h2>
        </div>

        <img className='headshot' src={nate} alt="" />
        <p className='bio-text'>
            <strong>Nate Sanchez</strong> - Guitar, Vocals, Songwriter, & Kazoo
        </p>
        <p className='bio-text'>
        Representing Washington State, he founded The Constant   Tourists with Cassie Sanchez in Moses Lake, WA in 2005. He has been writing original music since Middle School.  Nate taught himself how to play guitar. Currently he is considering an overseas trip to brush up on advanced kazoo techniques from world famous Kazoo Institution of Madrid.
        </p>

        <img className='headshot' src={cass} alt="" />
        <p className='bio-text'>
            <strong>Cassie Sanchez</strong> - Accordion, Trumpet, Songwriter, & Vocals
        </p>
        <p className='bio-text'>
        Growing up in Colorado Springs, CO music has been a large part of her life.  All through High School she played Trumpet and maintained first chair trumpet for years as well as being part of All State Choir.  All the while she was playing in a ska band called The Ghetto Cherubs.  After getting her first Accordion in 2006 she quickly incorporated it into the group.
        </p>

        <img className='headshot' src={mike} alt="" />
        <p className='bio-text'>
            <strong>Mike Dudley</strong> - Bass Guitar
        </p>
        <p className='bio-text'>
        As the latest addition to the band in 2012, Mike is a jack of trades and a master of all of them. Although he plays bass for the group, he is able to fill in as a drummer or mandolin player. Other then laying down a groove you might see him stagediving, smashing guitars, and biting the heads of small animals on stage.
        </p>

        <img className='headshot' src={sam} alt="" />
        <p className='bio-text'>
            <strong>Sam Gillet</strong> - Drums, Cymbals, & Waffle Pan
        </p>
        <p className='bio-text'>
        Hailing from the mean streets of east Belgium, Sam learned early on how to scrap for his next waffle and knows first hand  just how vital caramelized pearl sugar is to the taste of a true Liège-style gaufre.  In the rare moments when he isn't contemplating waffle batter, Sam is practicing for his next drum solo with the tourists.  His secret weapon of choice during live shows is a stainless steel food service pan he uses as a cowbell.
        </p>
    </div>
    </div>
)
