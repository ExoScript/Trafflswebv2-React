import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import MainContent from '../components/main-content'
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
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/37438957-1937-49c8-919d-bbaaa2990153/376e1323-8f7f-45d1-a446-e12e4a47f9d9?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <MainContent
        text55={
          <Fragment>
            <span className="page-text10 text">Pricing</span>
          </Fragment>
        }
        text56={
          <Fragment>
            <span className="page-text11 text">How it Work</span>
          </Fragment>
        }
        text57={
          <Fragment>
            <span className="page-text12 text">Contact us</span>
          </Fragment>
        }
        text58={
          <Fragment>
            <span className="page-text13 text">Privacy Policy</span>
          </Fragment>
        }
        text59={
          <Fragment>
            <span className="page-text14 text">Imprint</span>
          </Fragment>
        }
        text60={
          <Fragment>
            <span className="page-text15 text">info@traffls.com</span>
          </Fragment>
        }
        text61={
          <Fragment>
            <span className="page-text16">
              <span className="page-text17">Increase</span>
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
              <span className="page-text21">30%</span>
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
              <span className="page-text25">3 months</span>
            </span>
          </Fragment>
        }
        text62={
          <Fragment>
            <span className="page-text26">
              We generate a constant flow of B2B leads for you with a predefined
              ROI and without upfront costs. Only pay for what you get
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        text63={
          <Fragment>
            <span className="page-text27">Scroll down</span>
          </Fragment>
        }
        text64={
          <Fragment>
            <span className="page-text28">
              <span className="mainTitle">
                Why Choose
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="page-text30">traffls?</span>
            </span>
          </Fragment>
        }
        text65={
          <Fragment>
            <span className="page-text31">Guaranteed Leads</span>
          </Fragment>
        }
        text66={
          <Fragment>
            <span className="page-text32">Guaranteed positive ROI</span>
          </Fragment>
        }
        text67={
          <Fragment>
            <span className="page-text33">Tailored lead generation</span>
          </Fragment>
        }
        text68={
          <Fragment>
            <span className="page-text34">Positive ROI leads</span>
          </Fragment>
        }
        text69={
          <Fragment>
            <span className="page-text35">Dedicated account manager</span>
          </Fragment>
        }
        text70={
          <Fragment>
            <span className="page-text36">Guaranteed leads</span>
          </Fragment>
        }
        text71={
          <Fragment>
            <span className="page-text37">No minimum contract</span>
          </Fragment>
        }
        text76={
          <Fragment>
            <span className="page-text38">1</span>
          </Fragment>
        }
        text77={
          <Fragment>
            <span className="page-text39">2</span>
          </Fragment>
        }
        text78={
          <Fragment>
            <span className="page-text40">3</span>
          </Fragment>
        }
        text79={
          <Fragment>
            <span className="page-text41">4</span>
          </Fragment>
        }
        text80={
          <Fragment>
            <span className="page-text42">Book a Call</span>
          </Fragment>
        }
        text81={
          <Fragment>
            <span className="page-text43">Our Services</span>
          </Fragment>
        }
        text82={
          <Fragment>
            <span className="page-text44">Newslatter</span>
          </Fragment>
        }
        text722={
          <Fragment>
            <span className="page-text45">First name*</span>
          </Fragment>
        }
        text732={
          <Fragment>
            <span className="page-text46">Last name*</span>
          </Fragment>
        }
        text742={
          <Fragment>
            <span className="page-text47">Email*</span>
          </Fragment>
        }
        text752={
          <Fragment>
            <span className="page-text48">Phone (Optional)</span>
          </Fragment>
        }
      ></MainContent>
    </div>
  )
}

export default Page
