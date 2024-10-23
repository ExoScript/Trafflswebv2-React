import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './asked-questions.css'

const AskedQuestions = (props) => {
  const [q1, setQ1] = useState(false)
  const [q4, setQ4] = useState(false)
  const [q2, setQ2] = useState(false)
  const [q3, setQ3] = useState(false)
  return (
    <div className={`asked-questions-container1 ${props.rootClassName} `}>
      <div
        onClick={() => {
          setQ3(false)
          setQ4(false)
          setQ2(false)
          setQ1(!q1)
        }}
        className="asked-questions-quest1"
      >
        <div className="asked-questions-container2">
          <span className="asked-questions-text1">
            Does the setup cost anything?
          </span>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path
              d="M17 15V5h-2v10H5v2h10v10h2V17h10v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        {q1 === true && (
          <div className="asked-questions-container3">
            <span className="asked-questions-text2">
              No, there is no setup fee. We believe in the long-term value of
              our service, so we focus on delivering results without any upfront
              costs. This allows you to start without any financial barriers,
              trusting that our service will prove its value over time.
            </span>
          </div>
        )}
      </div>
      <div
        onClick={() => {
          setQ4(false)
          setQ1(false)
          setQ2(!q2)
          setQ3(false)
        }}
        className="asked-questions-quest2"
      >
        <div className="asked-questions-container4">
          <span className="asked-questions-text3">Is there a monthly fee?</span>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path
              d="M17 15V5h-2v10H5v2h10v10h2V17h10v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        {q2 === true && (
          <div className="asked-questions-container5">
            <span className="asked-questions-text4">
              No, there is no monthly or minimum fee. You only pay for the leads
              we generate, and the cost per lead is determined upfront. This
              ensures that you only pay for results, giving you full
              transparency and control over your investment.
            </span>
          </div>
        )}
      </div>
      <div
        onClick={() => {
          setQ2(false)
          setQ1(false)
          setQ4(false)
          setQ3(!q3)
        }}
        className="asked-questions-quest3"
      >
        <div className="asked-questions-container6">
          <span className="asked-questions-text5">
            Is there a minimum contract time?
          </span>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path
              d="M17 15V5h-2v10H5v2h10v10h2V17h10v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        {q3 === true && (
          <div className="asked-questions-container7">
            <span className="asked-questions-text6">
              No, there is no minimum contract duration. You have the
              flexibility to stay as long as you like. However, we are confident
              in the value we provide and believe that once you start working
              with us, you won’t want to leave!
            </span>
          </div>
        )}
      </div>
      <div
        onClick={() => {
          setQ2(false)
          setQ3(false)
          setQ4(!q4)
          setQ1(false)
        }}
        className="asked-questions-quest4"
      >
        <div className="asked-questions-container8">
          <span className="asked-questions-text7">
            How do you determine the price for a lead?
          </span>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path
              d="M17 15V5h-2v10H5v2h10v10h2V17h10v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        {q4 === true && (
          <div className="asked-questions-container9">
            <span className="asked-questions-text8">
              Thanks to our vast experience in B2B lead generation, we begin
              with an initial interview where we assess several key factors: the
              typical cost of a lead in your industry, the probability of
              closing these leads, and the average lifetime value of your
              customers. Based on this information, we calculate what is
              necessary to ensure a positive ROI for you. We will only provide a
              quote if we are confident we can deliver leads at the agreed price
              that align with your business goals.
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

AskedQuestions.defaultProps = {
  rootClassName: '',
}

AskedQuestions.propTypes = {
  rootClassName: PropTypes.string,
}

export default AskedQuestions
