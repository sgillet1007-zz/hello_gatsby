import React from "react"
import PageHeader from "../components/page_header"
import band from "../images/band.jpg"
import nate from "../images/nate.jpg"
import cass from "../images/cass.jpg"
import mike from "../images/mike.jpg"
import sam from "../images/sam.jpg"
import './index.css'

export default () => (
    <div>
        <PageHeader />
        <div>
            <img className='hero-image' src={band} alt="" />
        </div>
        <div id='next-show'>Next Show! ... January 26th </div>
        <div>
        <div className='divider-heading'>
            <h2>The Band</h2>
        </div>
        <img className='headshot' src={nate} alt="" />
        <p className='bio-text'>
            Nate Sanchez- Guitar, Vocals, Songwriter, & Kazoo Representing Washington State, he founded The Constant   Tourists with Cassie Sanchez in Moses Lake, WA in 2005. He has been writing original music since Middle School.  Nate taught himself how to play guitar. Currently he is considering an overseas trip to brush up on advanced kazoo techniques from world famous Kazoo Institution of Madrid.
        </p>
        <img className='headshot' src={cass} alt="" />
        <p className='bio-text'>
            Cassie Sanchez- Accordion, Trumpet, Songwriter, & Vocals Growing up in Colorado Springs, CO music has been a large part of her life.  All through High School she played Trumpet and maintained first chair trumpet for years as well as being part of All State Choir.  All the while she was playing in a ska band called The Ghetto Cherubs.  After getting her first Accordion in 2006 she quickly incorporated it into the group.
        </p>
        <img className='headshot' src={mike} alt="" />
        <p className='bio-text'>
            Mike Dudley- Bass Guitar As the latest addition to the band in 2012, Mike is a jack of trades and a master of all of them. Although he plays bass for the group, in the absence of Joel or Trent he fills in as a drummer or a mandolin player. Other then laying down a groove you might see him stagediving, smashing guitars, and biting the heads of small animals on stage.
        </p>
        <img className='headshot' src={sam} alt="" />
        <p className='bio-text'>
            Sam Gillet - Drums, Cymbals, & Waffle Pan Hailing from the mean streets of east Belgium, Sam learned early on how to scrap for his next waffle and knows first hand  just how vital caramelized pearl sugar is to the taste of a true Liège-style gaufre.  In the rare moments when he isn't contemplating waffle batter, Sam is practicing for his next drum solo with the tourists.  His secret weapon of choice during live shows is a stainless steel food service pan he uses as a cowbell.
        </p>
    </div>
    </div>
)
