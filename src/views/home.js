import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Central Optimization Manager</title>
        <meta property="og:title" content="Central Optimization Manager" />
      </Helmet>
    </div>
  )
}

export default Home
