import React from "react"
import { Link } from "gatsby"

export default props => {
    return (
        <div className='page-header'>
            <Link id='band_name' to="/">The Constant Tourists</Link>
            <span className='header-links-container'>
            <Link className='nav-link' to="/booking/">Booking</Link>
            <Link className='nav-link' to="/albums/">Albums</Link>
            <Link className ='nav-link' to="/photos/">Photos</Link>
            </span>
        </div>
    )
}
