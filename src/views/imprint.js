import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './imprint.css'

const Imprint = (props) => {
  return (
    <div className="imprint-container10">
      <Helmet>
        <title>Imprint - Traffls</title>
        <meta
          name="description"
          content="Boost your B2B leads by 30% in 3 months with no upfront costs and guaranteed ROI. Pay only for results. Book a call with Traffls and grow your business now!"
        />
        <meta property="og:title" content="Imprint - Traffls" />
        <meta
          property="og:description"
          content="Boost your B2B leads by 30% in just 3 months with no upfront costs or long contracts. Only pay for leads with guaranteed positive ROI. Traffls helps your business grow faster. Book a discovery call!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/37438957-1937-49c8-919d-bbaaa2990153/376e1323-8f7f-45d1-a446-e12e4a47f9d9?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="imprint-container11">
        <div className="imprint-container12">
          <div className="imprint-container13">
            <img
              alt="image"
              src="/logo_lila_cut-200w.png"
              className="imprint-image"
            />
          </div>
        </div>
        <div className="imprint-container14">
          <Link to="/" className="imprint-navlink1">
            <div className="imprint-container15 menu-btn">
              <span>Home</span>
            </div>
          </Link>
          <Link to="/" className="imprint-navlink2">
            <div className="imprint-container16 menu-btn">
              <span>About us</span>
            </div>
          </Link>
          <Link to="/" className="imprint-navlink3">
            <div className="imprint-container17 menu-btn">
              <span>Pricing</span>
            </div>
          </Link>
          <Link to="/" className="imprint-navlink4">
            <div className="imprint-container18 menu-btn">
              <span>How it Works</span>
            </div>
          </Link>
          <Link to="/" className="imprint-navlink5">
            <div className="imprint-container19 menu-btn">
              <span>Testimonials</span>
            </div>
          </Link>
          <Link to="/" className="imprint-navlink6">
            <div className="imprint-container20 menu-btn">
              <span>Contact us</span>
            </div>
          </Link>
        </div>
        <div className="imprint-container21">
          <a href="#cld" className="imprint-link">
            <div className="imprint-container22 btn-1">
              <span>Book a Call</span>
            </div>
          </a>
        </div>
      </div>
      <div className="imprint-container23">
        <span className="imprint-text17">
          <span>Impressum</span>
          <br></br>
        </span>
        <span className="imprint-text20">Angaben gemäß § 5 TMG</span>
        <div className="imprint-container24">
          <span className="imprint-text21">
            <span>Up2data GmbH</span>
            <br></br>
            <span>Prinz-Ludwig-Straße 4</span>
            <br></br>
            <span>80333 München</span>
          </span>
          <span className="imprint-text27">
            <span>Handelsregister: HRB284016</span>
            <br></br>
            <span>Registergericht: München</span>
          </span>
          <span className="imprint-text31">
            <span>Vertreten durch:</span>
            <br></br>
            <span>Daniel Donhauser</span>
          </span>
        </div>
        <span className="imprint-text35">Kontakt</span>
        <div className="imprint-container25">
          <span className="imprint-text36">E-Mail: info@traffls.com</span>
        </div>
        <span className="imprint-text37">
          <span>Verbraucherstreitbeilegung/</span>
          <br></br>
          <span>Universalschlichtungsstelle</span>
        </span>
        <span className="imprint-text41">
          <span>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer
          </span>
          <br></br>
          <span>Verbraucherschlichtungsstelle teilzunehmen.</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Imprint
