import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Pricing4 from '../components/pricing4'
import AskedQuestions from '../components/asked-questions'
import Mobilv from '../components/mobilv'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
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
      <div className="home-webv">
        <div className="home-container11">
          <div className="home-container12">
            <div className="home-container13">
              <img
                alt="image"
                src="/logo_lila_cut-200w.png"
                className="home-image10"
              />
            </div>
          </div>
          <div className="home-container14">
            <div className="home-container15 menu-btn">
              <span>Home</span>
            </div>
            <a href="#aboutUs" className="home-link1">
              <div className="home-container16 menu-btn">
                <span>About us</span>
              </div>
            </a>
            <a href="#pricing" className="home-link2">
              <div className="home-container17 menu-btn">
                <span>Pricing</span>
              </div>
            </a>
            <a href="#howItWork" className="home-link3">
              <div className="home-container18 menu-btn">
                <span>How it Works</span>
              </div>
            </a>
            <a href="#testimonials" className="home-link4">
              <div className="home-container19 menu-btn">
                <span>Testimonials</span>
              </div>
            </a>
            <a href="#contact" className="home-link5">
              <div className="home-container20 menu-btn">
                <span>Contact us</span>
              </div>
            </a>
          </div>
          <div className="home-container21">
            <a href="#cld" className="home-link6">
              <div className="home-container22 btn-1">
                <span>Book a Call</span>
              </div>
            </a>
          </div>
        </div>
        <div className="home-container23">
          <div className="home-container24">
            <div className="home-container25">
              <span className="home-text107">
                <span className="home-text108">Increase</span>
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
                <span className="home-text112">30%</span>
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
                <span className="home-text116">3 months</span>
              </span>
              <span className="home-text117">
                We generate a constant flow of B2B leads for you with a
                predefined ROI and without upfront costs. Only pay for what you
                get
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="home-container26">
                <a href="#cld" className="home-link7">
                  <div className="home-container27 btn-1">
                    <span>Book a Call</span>
                  </div>
                </a>
                <div className="btn-2">
                  <span>Our Services</span>
                </div>
              </div>
            </div>
            <div className="home-container29">
              <img alt="image" src="/b1-600h.webp" className="home-image11" />
            </div>
          </div>
        </div>
        <div className="home-container30">
          <span className="home-text120 title">
            <span className="home-text121">B2B Leads</span>
            <span> without Risk</span>
          </span>
          <span className="home-text123 txt">
            Trusted by leading SaaS Companies in Europe
          </span>
          <div className="home-container31"></div>
        </div>
        <div id="aboutUs" className="home-container32">
          <div className="home-container33">
            <div className="home-container34">
              <span className="home-text124">
                <span>
                  Why Choose
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text126">traffls?</span>
              </span>
              <div className="home-container35">
                <span className="home-text127">
                  traffls is the only service that not only guarantees you leads
                  but also guarantees a positive ROI on these leads. So you can
                  work with us and only pay when the outcome really benefits you
                  - no strings attached
                </span>
                <span className="home-text128"> </span>
                <span className="home-text129">
                  Our service, processes, and know-how are crafted by years of
                  B2B Sales experience and will help you to reach your next
                  growth goal faster and with less risk
                </span>
              </div>
              <a href="#cld" className="home-link8">
                <div className="home-container36 btn-1">
                  <span>Book a Call</span>
                </div>
              </a>
            </div>
            <div className="home-container37">
              <img alt="image" src="/b3-1000h.webp" className="home-image12" />
            </div>
          </div>
          <div className="home-container38">
            <div className="home-container39">
              <div className="home-container40">
                <img
                  src="/user-engagement-200h.png"
                  alt="image"
                  className="home-image13"
                />
              </div>
              <div className="home-container41">
                <span className="home-text131">Guaranteed Leads</span>
                <span className="home-text132">
                  If we do not deliver, there is no cost involved. But do not
                  worry, we will deliver
                </span>
              </div>
            </div>
            <div className="home-container42">
              <div className="home-container43">
                <img
                  src="/growing-business-200h.png"
                  alt="image"
                  className="home-image14"
                />
              </div>
              <div className="home-container44">
                <span className="home-text133">Guaranteed positive ROI</span>
                <span className="home-text134">
                  After getting to know your business we will establish a ROI
                  positive case for you so that you can grow your business
                  healthy
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container45">
          <div className="home-container46">
            <span className="home-text135 title">
              <span>
                Start Your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text137">Lead Engine</span>
            </span>
            <span className="home-text138 txt">
              Our goal is to help companies solve the growth problem by
              providing continuos leads they can convert into longterm
              customers.
            </span>
          </div>
          <div className="home-container47">
            <div className="home-container48">
              <div className="home-container49">
                <div className="home-container50">
                  <img
                    src="/badge-200h.png"
                    alt="image"
                    className="home-image15"
                  />
                </div>
                <span className="home-text139">No Upfront Costs</span>
                <span className="home-text140">
                  The onboarding, the system setup, and everything else is on
                  us. We want that you don&apos;t need to worry about anything
                  other than closing more leads
                </span>
              </div>
              <div className="home-container51">
                <div className="home-container52">
                  <img
                    src="/calendar-200h.png"
                    alt="image"
                    className="home-image16"
                  />
                </div>
                <span className="home-text141">No Monthly Fee</span>
                <span className="home-text142">
                  There is also no monthly fee, as we do believe in performance.
                  It is on us to make you happy and you should not pay for
                  anything else
                </span>
              </div>
            </div>
            <div className="home-container53">
              <div className="home-container54">
                <div className="home-container55">
                  <img
                    src="/paper-200h.png"
                    alt="image"
                    className="home-image17"
                  />
                </div>
                <span className="home-text143">No Minimum Contract</span>
                <span className="home-text144">
                  So we also do not believe in lenghty contract durations. If
                  you have the feeling that you want to move on, you can do it
                  anytime. The question is if this will ever happen
                </span>
              </div>
              <div className="home-container56">
                <div className="home-container57">
                  <img
                    src="/collaboration-200h.png"
                    alt="image"
                    className="home-image18"
                  />
                </div>
                <span className="home-text145">Ongoing Support</span>
                <span className="home-text146">
                  You will always have access to our team and your dedicated
                  account manager. The support channel is open 24/7. We will be
                  happy to make you happy
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="howItWork" className="home-container58">
          <span className="home-text147">
            <span className="home-text148">Getting More Leads</span>
            <span>
              {' '}
              Has Never Been This
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text150">Easy</span>
          </span>
          <div className="home-container59">
            <div className="home-container60">
              <div className="home-container61">
                <div className="home-container62">
                  <div className="home-container63">
                    <span className="home-text151">1</span>
                  </div>
                </div>
                <div className="home-container64">
                  <span className="home-text152">Book A Call</span>
                  <span className="home-text153">
                    We will get you know your company and answer some questions
                    to better understand your needs
                  </span>
                </div>
              </div>
              <div className="home-container65">
                <div className="home-container66">
                  <div className="home-container67">
                    <span className="home-text154">2</span>
                  </div>
                </div>
                <div className="home-container68">
                  <span className="home-text155">Offer</span>
                  <span className="home-text156">
                    We will send you an offer which fulfills your needs so that
                    your happiness can be guaranteed
                  </span>
                </div>
              </div>
            </div>
            <div className="home-container69">
              <div className="home-container70">
                <div className="home-container71">
                  <div className="home-container72">
                    <span className="home-text157">3</span>
                  </div>
                </div>
                <div className="home-container73">
                  <span className="home-text158">Onboarding</span>
                  <span className="home-text159">
                    We will prepare everything on our side and setup the system
                    so that we can send new leads to your systems
                  </span>
                </div>
              </div>
              <div className="home-container74">
                <div className="home-container75">
                  <div className="home-container76">
                    <span className="home-text160">4</span>
                  </div>
                </div>
                <div className="home-container77">
                  <span className="home-text161">Done</span>
                  <span className="home-text162">
                    You are now ready to get more leads on a constant basis to
                    grow your business faster
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="pricing" className="home-container78">
          <div className="home-container79">
            <span className="title">
              <span className="home-text164">Pricing</span>
              <span> that fits you</span>
            </span>
            <span className="home-text166 txt">
              In a call we will calculate your needs. Our guarantee is that our
              Leads will be ROI positive for you. Yet, every industry is
              different. So we need to get to know you first
            </span>
          </div>
          <Pricing4
            plan1={
              <Fragment>
                <span className="home-text167 thq-body-large">
                  Pay Per Lead
                </span>
              </Fragment>
            }
            plan2={
              <Fragment>
                <span className="home-text168 thq-body-large">
                  Custom Lead Generation
                </span>
              </Fragment>
            }
            plan1Price={
              <Fragment>
                <span className="home-text169 thq-heading-3">
                  Varies per lead
                </span>
              </Fragment>
            }
            plan2Price={
              <Fragment>
                <span className="home-text170 thq-heading-3">Custom Quote</span>
              </Fragment>
            }
            plan1Action={
              <Fragment>
                <span className="home-text171 thq-body-small">Get Started</span>
              </Fragment>
            }
            plan1Yearly={
              <Fragment>
                <span className="home-text172 thq-body-large">N/A</span>
              </Fragment>
            }
            plan2Action={
              <Fragment>
                <span className="home-text173 thq-body-small">Contact Us</span>
              </Fragment>
            }
            plan2Yearly={
              <Fragment>
                <span className="home-text174 thq-body-large">N/A</span>
              </Fragment>
            }
            plan1Feature1={
              <Fragment>
                <span className="home-text175 thq-body-small">
                  Guaranteed leads
                </span>
              </Fragment>
            }
            plan1Feature2={
              <Fragment>
                <span className="home-text176 thq-body-small">
                  Positive ROI leads
                </span>
              </Fragment>
            }
            plan1Feature3={
              <Fragment>
                <span className="home-text177 thq-body-small">
                  Ongoing support
                </span>
              </Fragment>
            }
            plan2Feature1={
              <Fragment>
                <span className="home-text178 thq-body-small">
                  Tailored lead generation
                </span>
              </Fragment>
            }
            plan2Feature2={
              <Fragment>
                <span className="home-text179 thq-body-small">
                  Positive ROI leads
                </span>
              </Fragment>
            }
            plan2Feature3={
              <Fragment>
                <span className="home-text180 thq-body-small">
                  Dedicated account manager
                </span>
              </Fragment>
            }
            plan2Feature4={
              <Fragment>
                <span className="home-text181 thq-body-small">
                  Guaranteed leads
                </span>
              </Fragment>
            }
            plan2Feature5={
              <Fragment>
                <span className="home-text182 thq-body-small">
                  No minimum contract
                </span>
              </Fragment>
            }
          ></Pricing4>
        </div>
        <div id="testimonials" className="home-container80">
          <div className="home-container81">
            <span className="title">
              <span>
                Hear from Our
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text185">Satisfied Clients</span>
            </span>
            <span className="home-text186 txt">
              In a call we will calculate your needs. Our guarantee is that our
              Leads will be ROI positive for you. Yet, every industry is
              different. So we need to get to know you first
            </span>
          </div>
          <div
            data-thq="slider"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            data-pause-autoplay-on-mouse-enter="true"
            className="home-slider swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="home-slider-slide1 swiper-slide"
              >
                <div className="home-column1 thq-card">
                  <div className="home-stars1">
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
                  <span>Default value</span>
                  <div className="home-avatar1">
                    <img
                      alt="CEO of TechSaaS"
                      src="https://images.unsplash.com/photo-1522845015757-50bce044e5da?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTEyODI4Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
                      className="home-avatar-image1 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="home-avatar-content1">
                      <span>Default value</span>
                      <span>Default value</span>
                    </div>
                  </div>
                </div>
                <div className="home-column2 thq-card">
                  <div className="home-stars2">
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
                  <span>Default value</span>
                  <div className="home-avatar2">
                    <img
                      alt="Marketing Director of SoftCloud"
                      src="https://images.unsplash.com/photo-1525357816819-392d2380d821?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTEyODI4Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
                      className="home-avatar-image2 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="home-avatar-content2">
                      <span>Default value</span>
                      <span>Default value</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="home-slider-slide2 swiper-slide"
              >
                <div className="home-column3 thq-card">
                  <div className="home-stars3">
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
                  <span>Default value</span>
                  <div className="home-avatar3">
                    <img
                      alt="COO of DataTech"
                      src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTEyODI4Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
                      className="home-avatar-image3 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="home-avatar-content3">
                      <span>Default value</span>
                      <span>Default value</span>
                    </div>
                  </div>
                </div>
                <div className="home-column4 thq-card">
                  <div className="home-stars4">
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
                  <span>Default value</span>
                  <div className="home-avatar4">
                    <img
                      alt="CFO of CloudWorks"
                      src="https://images.unsplash.com/photo-1615712278090-a935af124081?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTEyODI4M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
                      className="home-avatar-image4 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="home-avatar-content4">
                      <span>Default value</span>
                      <span>Default value</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
        </div>
        <div id="cld" className="home-container82">
          <div className="home-container83">
            <span className="title">
              <span>
                Book a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text201">Discovery</span>
              <span> Call</span>
            </span>
            <span className="home-text203 txt">
              Ready to take your lead generation to the next level? Schedule a
              discovery call with our experts to learn how traffls can help you
              achieve your goals.
            </span>
          </div>
          <div className="home-container84">
            <div className="home-container85">
              <React.Fragment>
                <React.Fragment>
                  {/* Calendly inline widget begin */}
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/traffls/30min"
                    style={{ minWidth: '600px', height: '750px' }}
                  />
                  <Script
                    type="text/javascript"
                    src="https://assets.calendly.com/assets/external/widget.js"
                    async={true}
                  />
                  {/* Calendly inline widget end */}
                </React.Fragment>
              </React.Fragment>
            </div>
          </div>
        </div>
        <div className="home-container86">
          <span className="title">
            <span>
              Frequently Asked
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text206">Questions</span>
          </span>
          <div className="home-container87">
            <AskedQuestions></AskedQuestions>
            <div className="home-container88">
              <span className="home-text207">Do you have more questions?</span>
              <span className="home-text208">
                If you have any further questions or need additional
                information, feel free to reach out to us! We’re here to help
                and would love to assist you in any way we can. Don’t hesitate
                to contact us – we’re just a message away!
              </span>
              <a href="#cld" className="home-link9">
                <div className="home-container89 btn-1">
                  <span>Book a Call</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="contact" className="home-container90">
          <div className="home-container91">
            <span className="title">
              <span className="home-text211">Contact</span>
              <span> Us</span>
            </span>
            <span className="txt">
              Have questions or need more information? Fill out the contact form
              below, and we will get back to you shortly.
            </span>
          </div>
          <div className="home-container92">
            <div className="home-container93">
              <div className="home-container94">
                <div className="home-container95">
                  <span className="home-text214">First name*</span>
                  <div className="home-container96">
                    <input
                      type="text"
                      placeholder="John"
                      className="home-textinput1"
                    />
                  </div>
                </div>
                <div className="home-container97">
                  <span className="home-text215">Last name*</span>
                  <div className="home-container98">
                    <input
                      type="text"
                      placeholder="Doe"
                      className="home-textinput2"
                    />
                  </div>
                </div>
              </div>
              <div className="home-container99">
                <div className="home-container100">
                  <span className="home-text216">Email*</span>
                  <div className="home-container101">
                    <input
                      type="text"
                      placeholder="john.doe@gmail.com"
                      className="home-textinput3"
                    />
                  </div>
                </div>
                <div className="home-container102">
                  <span className="home-text217">Phone (Optional)</span>
                  <div className="home-container103">
                    <input
                      type="text"
                      placeholder="+1 23 456 789"
                      className="home-textinput4"
                    />
                  </div>
                </div>
              </div>
              <div className="home-container104">
                <div className="home-container105">
                  <span className="home-text218">Message*</span>
                  <div className="home-container106">
                    <textarea
                      placeholder="Please write your message here..."
                      className="home-textarea textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container107">
              <img alt="image" src="/b2-600h.webp" className="home-image19" />
            </div>
          </div>
        </div>
        <div className="home-container108">
          <Link to="/imprint" className="home-navlink1">
            Imprint
          </Link>
          <Link to="/privacy-policy" className="home-navlink2">
            Privacy-Policy
          </Link>
        </div>
      </div>
      <Mobilv></Mobilv>
    </div>
  )
}

export default Home
