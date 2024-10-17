import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Traffls</title>
        <meta
          name="description"
          content="Boost your B2B leads by 30% in 3 months with no upfront costs and guaranteed ROI. Pay only for results. Book a call with Traffls and grow your business now!"
        />
        <meta property="og:title" content="Page - Traffls" />
        <meta
          property="og:description"
          content="Boost your B2B leads by 30% in just 3 months with no upfront costs or long contracts. Only pay for leads with guaranteed positive ROI. Traffls helps your business grow faster. Book a discovery call!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/37438957-1937-49c8-919d-bbaaa2990153/55f1a96a-7390-467c-957c-e2ed6ab27f98?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Link to="/" className="page-navlink">
        Back
      </Link>
    </div>
  )
}

export default Page
