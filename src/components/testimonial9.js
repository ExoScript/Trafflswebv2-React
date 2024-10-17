import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial9.css'

const Testimonial9 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial9-max-width thq-section-padding">
        <div className="testimonial9-section-title">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial9-text39 thq-heading-2">
                  Client Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="testimonial9-text45 thq-body-large">
                  Read what our clients have to say about our lead generation
                  service.
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="testimonial9-slider1 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="testimonial9-slider-slide1 swiper-slide"
            >
              <div className="testimonial9-column1 thq-card">
                <div className="testimonial9-stars1">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial9-text47 thq-body-small">
                        We have been using this service for a few months now,
                        and the quality of leads provided has exceeded our
                        expectations. Highly recommended!
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="testimonial9-avatar1">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial9-avatar-image1 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial9-avatar-content1">
                    <span>
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial9-text42 thq-body-small">
                            John Smith
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial9-text46 thq-body-small">
                            CEO, TechSaaS
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial9-column2 thq-card">
                <div className="testimonial9-stars2">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial9-text48 thq-body-small">
                        The team at this lead generation service truly
                        understands our target market. We have seen a
                        significant increase in qualified leads since we started
                        working with them.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="testimonial9-avatar2">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial9-avatar-image2 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial9-avatar-content2">
                    <span>
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial9-text43 thq-body-small">
                            Alice Johnson
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial9-text40 thq-body-small">
                            Marketing Director, SoftCloud
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial9-slider-slide2 swiper-slide"
            >
              <div className="testimonial9-column3 thq-card">
                <div className="testimonial9-stars3">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial9-text50 thq-body-small">
                        I was skeptical at first, but the results speak for
                        themselves. The leads provided are highly relevant and
                        have helped us boost our sales pipeline.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="testimonial9-avatar3">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial9-avatar-image3 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial9-avatar-content3">
                    <span>
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial9-text41 thq-body-small">
                            Mark Davis
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial9-text44 thq-body-small">
                            COO, DataTech
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial9-column4 thq-card">
                <div className="testimonial9-stars4">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial9-text52 thq-body-small">
                        Working with this service has been a game-changer for
                        us. The leads are of high quality, and the best part is
                        that we only pay for results.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="testimonial9-avatar4">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial9-avatar-image4 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial9-avatar-content4">
                    <span>
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial9-text51 thq-body-small">
                            Sarah Brown
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial9-text49 thq-body-small">
                            CFO, CloudWorks
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="testimonial9-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="testimonial9-slider2 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="testimonial9-slider-slide3 swiper-slide"
            >
              <div className="testimonial9-column5">
                <div className="testimonial9-stars5">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </span>
                <div className="testimonial9-avatar5">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial9-avatar-image5 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial9-avatar-content5">
                    <span>
                      <span>Author Name</span>
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial9-text42 thq-body-small">
                            John Smith
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      <span>Position, Company name</span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial9-text46 thq-body-small">
                            CEO, TechSaaS
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial9-slider-slide4 swiper-slide"
            >
              <div className="testimonial9-column6">
                <div className="testimonial9-stars6">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </span>
                <div className="testimonial9-avatar6">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial9-avatar-image6 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial9-avatar-content6">
                    <span>Author Name</span>
                    <span>
                      <span>Position, Company name</span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial9-text40 thq-body-small">
                            Marketing Director, SoftCloud
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial9-slider-slide5 swiper-slide"
            >
              <div className="testimonial9-column7">
                <div className="testimonial9-stars7">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </span>
                <div className="testimonial9-avatar7">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial9-avatar-image7 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial9-avatar-content7">
                    <span>Author Name</span>
                    <span>Position, Company name</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial9-slider-slide6 swiper-slide"
            >
              <div className="testimonial9-column8">
                <div className="testimonial9-stars8">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </span>
                <div className="testimonial9-avatar8">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial9-avatar-image8 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial9-avatar-content8">
                    <span>
                      <span>Author Name</span>
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial9-text51 thq-body-small">
                            Sarah Brown
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      <span>Position, Company name</span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial9-text49 thq-body-small">
                            CFO, CloudWorks
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="testimonial9-slider-pagination2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

Testimonial9.defaultProps = {
  heading1: undefined,
  author2Position: undefined,
  author3Name: undefined,
  author1Name: undefined,
  author2Name: undefined,
  author3Position: undefined,
  content1: undefined,
  author1Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1522845015757-50bce044e5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTEyODI4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1525357816819-392d2380d821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTEyODI4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1615712278090-a935af124081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTEyODI4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  review2: undefined,
  author1Alt: 'CEO of TechSaaS',
  author2Alt: 'Marketing Director of SoftCloud',
  author4Position: undefined,
  review3: undefined,
  author4Name: undefined,
  author3Alt: 'COO of DataTech',
  review4: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTEyODI4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'CFO of CloudWorks',
}

Testimonial9.propTypes = {
  heading1: PropTypes.element,
  author2Position: PropTypes.element,
  author3Name: PropTypes.element,
  author1Name: PropTypes.element,
  author2Name: PropTypes.element,
  author3Position: PropTypes.element,
  content1: PropTypes.element,
  author1Position: PropTypes.element,
  author1Src: PropTypes.string,
  review1: PropTypes.element,
  author2Src: PropTypes.string,
  author4Src: PropTypes.string,
  review2: PropTypes.element,
  author1Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Position: PropTypes.element,
  review3: PropTypes.element,
  author4Name: PropTypes.element,
  author3Alt: PropTypes.string,
  review4: PropTypes.element,
  author3Src: PropTypes.string,
  author4Alt: PropTypes.string,
}

export default Testimonial9
