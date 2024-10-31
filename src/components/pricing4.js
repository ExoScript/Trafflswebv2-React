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
                <p className="pricing4-text10 thq-body-large">
                  {props.plan1 ?? (
                    <Fragment>
                      <span className="pricing4-text29">Pay Per Lead</span>
                    </Fragment>
                  )}
                </p>
                <h3 className="pricing4-text11 thq-heading-3">
                  {props.plan1Price ?? (
                    <Fragment>
                      <span className="pricing4-text32">Varies per lead</span>
                    </Fragment>
                  )}
                </h3>
                <p className="pricing4-text12 thq-body-large">
                  {props.plan1Yearly ?? (
                    <Fragment>
                      <span className="pricing4-text31">N/A</span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="pricing4-list1">
                <div className="pricing4-list-item1">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan1Feature1 ?? (
                      <Fragment>
                        <span className="pricing4-text33">
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
                  <span className="thq-body-small">
                    {props.plan1Feature2 ?? (
                      <Fragment>
                        <span className="pricing4-text26">
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
                  <span className="thq-body-small">
                    {props.plan1Feature3 ?? (
                      <Fragment>
                        <span className="pricing4-text36">Ongoing support</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <button className="pricing4-button1 thq-button-outline">
              <span className="thq-body-small">
                {props.plan1Action ?? (
                  <Fragment>
                    <span className="pricing4-text38">Get Started</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="pricing4-column2 thq-card">
            <div className="pricing4-price2">
              <div className="pricing4-price3">
                <p className="pricing4-text17 thq-body-large">
                  {props.plan2 ?? (
                    <Fragment>
                      <span className="pricing4-text40">
                        Custom Lead Generation
                      </span>
                    </Fragment>
                  )}
                </p>
                <h3 className="pricing4-text18 thq-heading-3">
                  {props.plan2Price ?? (
                    <Fragment>
                      <span className="pricing4-text35">Custom Quote</span>
                    </Fragment>
                  )}
                </h3>
                <p className="pricing4-text19 thq-body-large">
                  {props.plan2Yearly ?? (
                    <Fragment>
                      <span className="pricing4-text30">N/A</span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="pricing4-list2">
                <div className="pricing4-list-item4">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature1 ?? (
                      <Fragment>
                        <span className="pricing4-text34">
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
                  <span className="thq-body-small">
                    {props.plan2Feature2 ?? (
                      <Fragment>
                        <span className="pricing4-text27">
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
                  <span className="thq-body-small">
                    {props.plan2Feature3 ?? (
                      <Fragment>
                        <span className="pricing4-text28">
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
                  <span className="thq-body-small">
                    {props.plan2Feature4 ?? (
                      <Fragment>
                        <span className="pricing4-text41">
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
                  <span className="thq-body-small">
                    {props.plan2Feature5 ?? (
                      <Fragment>
                        <span className="pricing4-text39">
                          No minimum contract
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <button className="pricing4-button2 thq-button-filled">
              <span className="thq-body-small">
                {props.plan2Action ?? (
                  <Fragment>
                    <span className="pricing4-text37">Contact Us</span>
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
