import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import band_photo from "../images/band_photo.jpg"

export default () => (
    <div style={{color: 'purple'}}>
        <Link to="/contact/">Contact</Link>
        <span style={{'padding-right': 5}} />
        <Link to="/about/">About</Link>
        <Header headerText="Hello Gatsby!" />
        <p>What a world!</p>
        <img src={band_photo} alt="" />
    </div>

)
