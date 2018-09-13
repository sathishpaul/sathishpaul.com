import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people, how are you, this is very nice</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <img src="https://source.unsplash.com/random/800x600" alt="" />

    <br/>
    <Link to="/page-2/">Go to page 2</Link><br/>
    <Link to="/about">About Paul</Link>
  </div>
)

export default IndexPage
