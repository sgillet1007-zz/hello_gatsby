import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import photos from "../images/gallery"

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