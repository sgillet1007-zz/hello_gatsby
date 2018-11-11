import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Book the band for an event!</p>
    <p>Sign up for the TCT mailing list!</p>
  </div>
)