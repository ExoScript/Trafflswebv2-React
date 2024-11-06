import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import MainContent from '../components/main-content'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Traffls</title>
        <meta
          name="description"
          content="Boost your B2B leads by 30% in 3 months with no upfront costs and guaranteed ROI. Pay only for results. Book a call with Traffls and grow your business now!"
        />
        <meta property="og:title" content="Traffls" />
        <meta
          property="og:description"
          content="Boost your B2B leads by 30% in just 3 months with no upfront costs or long contracts. Only pay for leads with guaranteed positive ROI. Traffls helps your business grow faster. Book a discovery call!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/37438957-1937-49c8-919d-bbaaa2990153/376e1323-8f7f-45d1-a446-e12e4a47f9d9?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <MainContent
        text={
          <Fragment>
            <span className="home-text10">
              <span className="home-text11">Thank you for subscribing!</span>
              <br></br>
              <span>
                You are now part of our exclusive newsletter. Look forward to
                regular updates, exciting content, and exclusive offers straight
                to your inbox.
              </span>
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text14">
              <span className="home-text15">Thank you for subscribing!</span>
              <br></br>
              <span>
                You are now part of our exclusive newsletter. Look forward to
                regular updates, exciting content, and exclusive offers straight
                to your inbox.
              </span>
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text18">
              Thank you for your contact request. We have sent you a
              confirmation. Please also check your spam folder.
            </span>
          </Fragment>
        }
        text55={
          <Fragment>
            <span className="home-text19 text">Pricing</span>
          </Fragment>
        }
        text56={
          <Fragment>
            <span className="home-text20 text">How it Work</span>
          </Fragment>
        }
        text57={
          <Fragment>
            <span className="home-text21 text">Contact us</span>
          </Fragment>
        }
        text58={
          <Fragment>
            <span className="home-text22 text">Privacy Policy</span>
          </Fragment>
        }
        text59={
          <Fragment>
            <span className="home-text23 text">Imprint</span>
          </Fragment>
        }
        text60={
          <Fragment>
            <span className="home-text24 text">info@traffls.com</span>
          </Fragment>
        }
        text61={
          <Fragment>
            <span className="home-text25">
              <span className="home-text26">Increase</span>
              <span> your</span>
              <br></br>
              <span>
                Leadflow by
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text30">30%</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                in
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text34">3 months</span>
            </span>
          </Fragment>
        }
        text63={
          <Fragment>
            <span className="home-text35">Scroll down</span>
          </Fragment>
        }
        text64={
          <Fragment>
            <span className="home-text36">
              <span className="mainTitle home-text37">Why Choose</span>
              <span className="mainTitle">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text39">traffls?</span>
            </span>
          </Fragment>
        }
        text65={
          <Fragment>
            <span className="home-text40">Guaranteed Leads</span>
          </Fragment>
        }
        text66={
          <Fragment>
            <span className="home-text41">Guaranteed positive ROI</span>
          </Fragment>
        }
        text67={
          <Fragment>
            <span className="home-text42">Tailored lead generation</span>
          </Fragment>
        }
        text68={
          <Fragment>
            <span className="home-text43">Positive ROI leads</span>
          </Fragment>
        }
        text69={
          <Fragment>
            <span className="home-text44">Dedicated account manager</span>
          </Fragment>
        }
        text70={
          <Fragment>
            <span className="home-text45">Guaranteed leads</span>
          </Fragment>
        }
        text71={
          <Fragment>
            <span className="home-text46">No minimum contract</span>
          </Fragment>
        }
        text76={
          <Fragment>
            <span className="home-text47">1</span>
          </Fragment>
        }
        text77={
          <Fragment>
            <span className="home-text48">2</span>
          </Fragment>
        }
        text78={
          <Fragment>
            <span className="home-text49">3</span>
          </Fragment>
        }
        text79={
          <Fragment>
            <span className="home-text50">4</span>
          </Fragment>
        }
        text80={
          <Fragment>
            <span className="home-text51">Book a Call</span>
          </Fragment>
        }
        text81={
          <Fragment>
            <span className="home-text52">Our Services</span>
          </Fragment>
        }
        text82={
          <Fragment>
            <span className="home-text53">Newslatter</span>
          </Fragment>
        }
        text722={
          <Fragment>
            <span className="home-text54">First name*</span>
          </Fragment>
        }
        text732={
          <Fragment>
            <span className="home-text55">Last name*</span>
          </Fragment>
        }
        text742={
          <Fragment>
            <span className="home-text56">Email*</span>
          </Fragment>
        }
        text752={
          <Fragment>
            <span className="home-text57">Phone (Optional)</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text58">Company</span>
          </Fragment>
        }
        text31={
          <Fragment>
            <span className="home-text59">Contact us</span>
          </Fragment>
        }
        text32={
          <Fragment>
            <span className="home-text60">How it work</span>
          </Fragment>
        }
        text33={
          <Fragment>
            <span className="home-text61">Pricing</span>
          </Fragment>
        }
      ></MainContent>
    </div>
  )
}

export default Home
