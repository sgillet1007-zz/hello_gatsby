import React from "react"
import PageHeader from "../components/page_header"
import photos from "../images/photos"

const images = photos.map(p => <img className='photos-image' src={p} alt="" />)

export default () => (
  <div id='photos-section'>
    <PageHeader />
    <div id='photos-grid'>
      {images}
    </div>
  </div>
)