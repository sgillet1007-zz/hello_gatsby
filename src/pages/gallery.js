import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import photo_1 from "../images/gallery/photo1.jpeg"
import photo_2 from "../images/gallery/photo2.jpeg"
import photo_3 from "../images/gallery/photo3.jpeg"
import photo_4 from "../images/gallery/photo4.jpeg"
import photo_5 from "../images/gallery/photo5.jpeg"
import photo_6 from "../images/gallery/photo6.jpeg"
import photo_7 from "../images/gallery/photo7.jpeg"
import photo_8 from "../images/gallery/photo8.jpeg"
import photo_9 from "../images/gallery/photo9.jpeg"
import photo_10 from "../images/gallery/photo10.jpeg"
import photo_11 from "../images/gallery/photo11.jpeg"
import photo_12 from "../images/gallery/photo12.jpeg"
import photo_13 from "../images/gallery/photo13.jpeg"
import photo_14 from "../images/gallery/photo14.jpeg"
import photo_15 from "../images/gallery/photo15.jpeg"
import photo_16 from "../images/gallery/photo16.jpeg"
import photo_17 from "../images/gallery/photo17.jpeg"
import photo_18 from "../images/gallery/photo18.jpeg"
import photo_19 from "../images/gallery/photo19.jpeg"
import photo_20 from "../images/gallery/photo20.jpeg"
import photo_21 from "../images/gallery/photo21.jpeg"
import photo_22 from "../images/gallery/photo22.jpeg"
import photo_23 from "../images/gallery/photo23.jpeg"
import photo_24 from "../images/gallery/photo24.jpeg"
import photo_25 from "../images/gallery/photo25.jpeg"

const photos = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6, photo_7, photo_8, photo_9, photo_10, photo_11, photo_12, photo_13, photo_14, photo_15, photo_16, photo_17, photo_18, photo_19, photo_20, photo_21, photo_22, photo_23, photo_24, photo_25]

const gridStyle = {
  'display': 'grid',
  'gridTemplateColumns': 'repeat(auto-fill, minmax(250px, 400px))',
  'gridGap': '20px',
  'alignItems': 'center'
}

const imgStyle = {
  'border': '1px solid #ccc',
  'boxShadow': '2px 2px 6px 0px  rgba(0,0,0,0.3)',
  'maxWidth': '100%'
}

const images = photos.map(p => <img style={imgStyle} src={p} alt="" />)

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Header headerText="Photo Gallery" />
    <div style={gridStyle}>
      {images}
    </div>
  </div>
)