import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import band from "../images/band.jpg"
import nate from "../images/nate.jpg"
import cass from "../images/cass.jpg"
import mike from "../images/mike.jpg"
import sam from "../images/sam.jpg"

const centered = {
    'display': 'block',
    'margin': 'auto'
}
const centerText = {'textAlign': 'center'}

export default () => (
    <div>
        <div>
            <span style={{float: 'right'}}>
            <Link to="/contact/">Contact</Link>
            <span style={{'padding-right': 5}} />
            <Link to="/gallery/">Photo Gallery</Link>
            </span>
            <Header headerText="The Constant Tourists" />
            <div>
                <img src={band} alt="" style={{width: '100vw'}} />
            </div>
        </div>
        <div style={centerText}>
        <h2>Music</h2>
        <div><label for="inTheCity">In the City:</label></div>
        <audio style={centered} id="inTheCity" controls src="http://nebula.wsimg.com/788d768a30ec760f31e1cdc18418d0d8?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio">Your browser does not support the <code>audio</code> element.</audio>
        <div><label for="rufus">Rufus:</label></div>
        <audio style={centered} id="rufus" controls src="http://nebula.wsimg.com/ebddcff358e271a11c11063583e84812?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio">Your browser does not support the <code>audio</code> element.</audio>
        <div><label for="so_you_will_go">So you will go:</label></div>
        <audio style={centered} id="so_you_will_go" controls src="http://nebula.wsimg.com/4f3b90188c1be67b166e0b2314680e33?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio">Your browser does not support the <code>audio</code> element.</audio>
        <div><label for="everything_but_the_blues">Everything but the blues:</label></div>
        <audio style={centered} id="everything_but_the_blues" controls src="http://nebula.wsimg.com/ec629a8de6b9a19d0c77731866f64f42?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio">Your browser does not support the <code>audio</code> element.</audio>
        <div><label for="green_as_a_stone">Green as a stone:</label></div>
        <audio style={centered} id="green_as_a_stone" controls src="http://nebula.wsimg.com/b12892e26eabc5c46c1cca41d531ab9a?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio">Your browser does not support the <code>audio</code> element.</audio>
        <div><label for="love_is_dumb">Love is Dumb music video:</label></div>
        <iframe title="love_is_dumb" id="love_is_dumb" width="420" height="315" src="https://www.youtube.com/embed/H3rwkCEij88" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> 

        <div style={centerText}>
            <h2>Band</h2>
            <h3>Nate</h3>
            <img src={nate} alt="" />
            <p>Nate Sanchez- Guitar, Vocals, Songwriter, & Kazoo
Representing Washington State, he founded The Constant   Tourists with Cassie Sanchez in Moses Lake, WA in 2005. He has been writing original music since Middle School.  Nate taught himself how to play guitar. Currently he is considering an overseas trip to brush up on advanced kazoo techniques from world famous Kazoo Institution of Madrid.</p>
            <h3>Cass</h3>
            <img src={cass} alt="" />
            <p>Cassie Sanchez- Accordion, Trumpet, Songwriter, & Vocals
Growing up in Colorado Springs, CO music has been a large part of her life.  All through High School she played Trumpet and maintained first chair trumpet for years as well as being part of All State Choir.  All the while she was playing in a ska band called The Ghetto Cherubs.  After getting her first Accordion in 2006 she quickly incorporated it into the group.</p>
            <h3>Mike</h3>
            <img src={mike} alt="" />
            <p>Mike Dudley- Bass Guitar
As the latest addition to the band in 2012, Mike is a jack of trades and a master of all of them. Although he plays bass for the group, in the absence of Joel or Trent he fills in as a drummer or a mandolin player. Other then laying down a groove you might see him stagediving, smashing guitars, and biting the heads of small animals on stage.</p>
            <h3>Sam</h3>
            <img src={sam} alt="" />
            <p>Sam Gillet - Drums, Cymbals, & Waffle Pan
Hailing from the mean streets of east Belgium, Sam learned early on how to scrap for his next waffle and knows first hand  just how vital caramelized pearl sugar is to the taste of a true Liège-style gaufre.  In the rare moments when he isn't contemplating waffle batter, Sam is practicing for his next drum solo with the tourists.  His secret weapon of choice during live shows is a stainless steel food service pan he uses as a cowbell.</p>
        </div>
    </div>
)
