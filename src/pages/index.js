import React from "react"

import band from "../images/band.jpg"
import TrackPlayer from '../components/track_player'
import UpcomingShows from '../components/show_list'
import BandBios from '../components/band_bios'
import PageHeader from "../components/page_header"
import './index.css'

export default () => (
    <div>
        <PageHeader />
        <img className='hero-image' src={band} alt="" />
        <TrackPlayer />
        <UpcomingShows />
        <BandBios />
    </div>
)
