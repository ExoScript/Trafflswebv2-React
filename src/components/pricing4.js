import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './pricing4.css'

const Pricing4 = (props) => {
  return (
    <div className="pricing4-pricing10 thq-section-padding">
      <div className="pricing4-max-width thq-section-max-width">
        <div className="pricing4-content1">
          <div className="pricing4-column1 thq-card">
            <div className="pricing4-content2">
              <div className="pricing4-price1">
                <p>
                  {props.plan1 ?? (
                    <Fragment>
                      <p className="pricing4-text29 thq-body-large">
                        Pay Per Lead
                      </p>
                    </Fragment>
                  )}
                </p>
                <h3>
                  {props.plan1Price ?? (
                    <Fragment>
                      <h3 className="pricing4-text32 thq-heading-3">
                        Varies per lead
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.plan1Yearly ?? (
                    <Fragment>
                      <p className="pricing4-text31 thq-body-large">N/A</p>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="pricing4-list1">
                <div className="pricing4-list-item1">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span>
                    {props.plan1Feature1 ?? (
                      <Fragment>
                        <span className="pricing4-text33 thq-body-small">
                          Guaranteed leads
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item2">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span>
                    {props.plan1Feature2 ?? (
                      <Fragment>
                        <span className="pricing4-text26 thq-body-small">
                          Positive ROI leads
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item3">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span>
                    {props.plan1Feature3 ?? (
                      <Fragment>
                        <span className="pricing4-text36 thq-body-small">
                          Ongoing support
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <button className="pricing4-button1 thq-button-outline">
              <span>
                {props.plan1Action ?? (
                  <Fragment>
                    <span className="pricing4-text38 thq-body-small">
                      Get Started
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="pricing4-column2 thq-card">
            <div className="pricing4-price2">
              <div className="pricing4-price3">
                <p>
                  {props.plan2 ?? (
                    <Fragment>
                      <p className="pricing4-text40 thq-body-large">
                        Custom Lead Generation
                      </p>
                    </Fragment>
                  )}
                </p>
                <h3>
                  {props.plan2Price ?? (
                    <Fragment>
                      <h3 className="pricing4-text35 thq-heading-3">
                        Custom Quote
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.plan2Yearly ?? (
                    <Fragment>
                      <p className="pricing4-text30 thq-body-large">N/A</p>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="pricing4-list2">
                <div className="pricing4-list-item4">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span>
                    {props.plan2Feature1 ?? (
                      <Fragment>
                        <span className="pricing4-text34 thq-body-small">
                          Tailored lead generation
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item5">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span>
                    {props.plan2Feature2 ?? (
                      <Fragment>
                        <span className="pricing4-text27 thq-body-small">
                          Positive ROI leads
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item6">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span>
                    {props.plan2Feature3 ?? (
                      <Fragment>
                        <span className="pricing4-text28 thq-body-small">
                          Dedicated account manager
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item7">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span>
                    {props.plan2Feature4 ?? (
                      <Fragment>
                        <span className="pricing4-text41 thq-body-small">
                          Guaranteed leads
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item8">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span>
                    {props.plan2Feature5 ?? (
                      <Fragment>
                        <span className="pricing4-text39 thq-body-small">
                          No minimum contract
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <button className="pricing4-button2 thq-button-filled">
              <span>
                {props.plan2Action ?? (
                  <Fragment>
                    <span className="pricing4-text37 thq-body-small">
                      Contact Us
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Pricing4.defaultProps = {
  plan1Feature2: undefined,
  plan2Feature2: undefined,
  plan2Feature3: undefined,
  plan1: undefined,
  plan2Yearly: undefined,
  plan1Yearly: undefined,
  plan1Price: undefined,
  plan1Feature1: undefined,
  plan2Feature1: undefined,
  plan2Price: undefined,
  plan1Feature3: undefined,
  plan2Action: undefined,
  plan1Action: undefined,
  plan2Feature5: undefined,
  plan2: undefined,
  plan2Feature4: undefined,
}

Pricing4.propTypes = {
  plan1Feature2: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan1: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan1Price: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan2Price: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan2Action: PropTypes.element,
  plan1Action: PropTypes.element,
  plan2Feature5: PropTypes.element,
  plan2: PropTypes.element,
  plan2Feature4: PropTypes.element,
}

export default Pricing4
