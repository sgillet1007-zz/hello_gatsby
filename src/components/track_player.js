import React from 'react'
import AudioPlayer from 'react-modular-audio-player';
// docs: https://retrofuturejosh.github.io/demo-react-modular-audio-player/#/docs

import play_arrow from '../images/icons/play_arrow.png'
import play_arrow_hover from '../images/icons/play_arrow_hover.png'
import pause from '../images/icons/pause.png'
import pause_hover from '../images/icons/pause_hover.png'
import forward from '../images/icons/forward.png'
import forward_hover from '../images/icons/forward_hover.png'
import rewind from '../images/icons/rewind.png'
import rewind_hover from '../images/icons/rewind_hover.png'

  const tracks = [
      {
          src: 'http://nebula.wsimg.com/788d768a30ec760f31e1cdc18418d0d8?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio',
          title: 'In The City - Missed Connections'
      },
      {
          src: 'http://nebula.wsimg.com/ebddcff358e271a11c11063583e84812?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio',
          title: 'Rufus'
      }
  ]

  const rearrangePlayer = [
    {
        className: "audio-container",
        // style: { justifyContent: 'center'},
        innerComponents: [
            {
                type: 'name',
                style: {width: "35vw"}
             },
            { 
                type: 'rewind',
                style: {width: "fit-content"}
            },
            { 
                type: 'play',
                style: {width: "fit-content"}
             },
            { 
                type: 'forward',
                style: {width: "fit-content"}
             },
            { 
                type: 'time',
                style: {width: "35vw"}
             }
        ]
    }
  ]

export default () => {
    return (
        <div className='audio-container'>
            <AudioPlayer 
                audioFiles={tracks}
                fontColor={'white'}
                hideLoop
                playIcon={play_arrow}
                playHoverIcon={play_arrow_hover}
                pauseIcon={pause}
                pauseHoverIcon={pause_hover}
                forwardIcon={forward}
                forwardHoverIcon={forward_hover}
                rewindIcon={rewind}
                rewindHoverIcon={rewind_hover}
                iconSize={'2em'}
                fontFamily={'Helevetica'}
                fontSize={'1.2em'}
                sliderClass={'slider'}
                hideSeeking
                rearrange={rearrangePlayer}
            />
        </div>
    )
    // TODO - make player background same as body background and font lighter color
}
