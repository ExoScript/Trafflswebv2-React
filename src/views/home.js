import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import AskedQuestions from '../components/asked-questions'
import Mobilv from '../components/mobilv'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container100">
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
        <div className="home-container101">
          <div className="home-container102">
            <div className="home-container103">
              <Link to="/home-v2" className="home-navlink1">
                <img
                  alt="image"
                  src="/logo_lila_cut-200w.png"
                  className="home-image10"
                />
              </Link>
            </div>
          </div>
          <div className="home-container104">
            <div className="home-container105 menu-btn">
              <span>Home</span>
            </div>
            <a href="#aboutUs" className="home-link10">
              <div className="home-container106 menu-btn">
                <span>About us</span>
              </div>
            </a>
            <a href="#pricing" className="home-link11">
              <div className="home-container107 menu-btn">
                <span>Pricing</span>
              </div>
            </a>
            <a href="#howItWork" className="home-link12">
              <div className="home-container108 menu-btn">
                <span>How it Works</span>
              </div>
            </a>
            <a href="#testimonials" className="home-link13">
              <div className="home-container109 menu-btn">
                <span>Testimonials</span>
              </div>
            </a>
            <a href="#contact" className="home-link14">
              <div className="home-container110 menu-btn">
                <span>Contact us</span>
              </div>
            </a>
          </div>
          <div className="home-container111">
            <a href="#cld" className="home-link15">
              <div className="home-container112 btn-1">
                <span>Book a Call</span>
              </div>
            </a>
          </div>
        </div>
        <div id="top" className="home-container113">
          <div className="home-container114">
            <div className="home-container115">
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
              <div className="home-container116">
                <a href="#cld" className="home-link16">
                  <div className="home-container117 btn-1">
                    <span>Book a Call</span>
                  </div>
                </a>
                <a href="#howItWork" className="home-link17">
                  <div className="home-container118 btn-2">
                    <span>Our Services</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="home-container119">
              <img alt="image" src="/b1-600h.webp" className="home-image11" />
            </div>
          </div>
        </div>
        <div className="home-container120">
          <span className="home-text120 title">
            <span className="home-text121">B2B Leads</span>
            <span> without Risk</span>
          </span>
          <span className="home-text123 txt">
            Trusted by leading SaaS Companies in Europe
          </span>
          <div className="home-container121"></div>
        </div>
        <div id="aboutUs" className="home-container122">
          <div className="home-container123">
            <div className="home-container124">
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
              <div className="home-container125">
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
              <a href="#cld" className="home-link18">
                <div className="home-container126 btn-1">
                  <span>Book a Call</span>
                </div>
              </a>
            </div>
            <div className="home-container127">
              <img alt="image" src="/b3-900h.webp" className="home-image12" />
            </div>
          </div>
          <div className="home-container128">
            <div className="home-container129">
              <div className="home-container130">
                <img
                  alt="image"
                  src="/user-engagement-200h.png"
                  className="home-image13"
                />
              </div>
              <div className="home-container131">
                <span className="home-text131">Guaranteed Leads</span>
                <span className="home-text132">
                  If we do not deliver, there is no cost involved. But do not
                  worry, we will deliver
                </span>
              </div>
            </div>
            <div className="home-container132">
              <div className="home-container133">
                <img
                  alt="image"
                  src="/growing-business-200h.png"
                  className="home-image14"
                />
              </div>
              <div className="home-container134">
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
        <div className="home-container135">
          <div className="home-container136">
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
          <div className="home-container137">
            <div className="home-container138">
              <div className="home-container139">
                <div className="home-container140">
                  <img
                    alt="image"
                    src="/badge-200h.png"
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
              <div className="home-container141">
                <div className="home-container142">
                  <img
                    alt="image"
                    src="/calendar-200h.png"
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
            <div className="home-container143">
              <div className="home-container144">
                <div className="home-container145">
                  <img
                    alt="image"
                    src="/paper-200h.png"
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
              <div className="home-container146">
                <div className="home-container147">
                  <img
                    alt="image"
                    src="/collaboration-200h.png"
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
        <div id="howItWork" className="home-container148">
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
          <div className="home-container149">
            <div className="home-container150">
              <div className="home-container151">
                <div className="home-container152">
                  <div className="home-container153">
                    <span className="home-text151">1</span>
                  </div>
                </div>
                <div className="home-container154">
                  <span className="home-text152">Book A Call</span>
                  <span className="home-text153">
                    We will get you know your company and answer some questions
                    to better understand your needs
                  </span>
                </div>
              </div>
              <div className="home-container155">
                <div className="home-container156">
                  <div className="home-container157">
                    <span className="home-text154">2</span>
                  </div>
                </div>
                <div className="home-container158">
                  <span className="home-text155">Offer</span>
                  <span className="home-text156">
                    We will send you an offer which fulfills your needs so that
                    your happiness can be guaranteed
                  </span>
                </div>
              </div>
            </div>
            <div className="home-container159">
              <div className="home-container160">
                <div className="home-container161">
                  <div className="home-container162">
                    <span className="home-text157">3</span>
                  </div>
                </div>
                <div className="home-container163">
                  <span className="home-text158">Onboarding</span>
                  <span className="home-text159">
                    We will prepare everything on our side and setup the system
                    so that we can send new leads to your systems
                  </span>
                </div>
              </div>
              <div className="home-container164">
                <div className="home-container165">
                  <div className="home-container166">
                    <span className="home-text160">4</span>
                  </div>
                </div>
                <div className="home-container167">
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
        <div id="pricing" className="home-container168">
          <div className="home-container169">
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
          <div className="home-container170">
            <div className="home-container171">
              <span className="home-text167">Custom Lead Generation</span>
              <span className="home-text168">Custom Quote</span>
              <span>N/A</span>
            </div>
            <div className="home-container172">
              <div className="home-container173">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="m5 13l4 4L19 7"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>Tailored lead generation</span>
              </div>
              <div className="home-container174">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="m5 13l4 4L19 7"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>Positive ROI leads</span>
              </div>
              <div className="home-container175">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="m5 13l4 4L19 7"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>Dedicated account manager</span>
              </div>
              <div className="home-container176">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="m5 13l4 4L19 7"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>Guaranteed leads</span>
              </div>
              <div className="home-container177">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="m5 13l4 4L19 7"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>No minimum contract</span>
              </div>
            </div>
            <a href="#cld" className="home-link19">
              <div className="home-container178 btn-1">
                <span>Book a Call</span>
              </div>
            </a>
          </div>
        </div>
        <div id="testimonials" className="home-container179">
          <div className="home-container180">
            <span className="title">
              <span>
                Hear from Our
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text178">Satisfied Clients</span>
            </span>
            <span className="home-text179 txt">
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
        <div id="cld" className="home-container181">
          <div className="home-container182">
            <span className="title">
              <span>
                Book a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text194">Discovery</span>
              <span> Call</span>
            </span>
            <span className="home-text196 txt">
              Ready to take your lead generation to the next level? Schedule a
              discovery call with our experts to learn how traffls can help you
              achieve your goals.
            </span>
          </div>
          <div className="home-container183">
            <div className="home-container184">
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
        <div className="home-container185">
          <span className="title">
            <span>
              Frequently Asked
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text199">Questions</span>
          </span>
          <div className="home-container186">
            <AskedQuestions></AskedQuestions>
            <div className="home-container187">
              <span className="home-text200">Do you have more questions?</span>
              <span className="home-text201">
                If you have any further questions or need additional
                information, feel free to reach out to us! We’re here to help
                and would love to assist you in any way we can. Don’t hesitate
                to contact us – we’re just a message away!
              </span>
              <a href="#cld" className="home-link20">
                <div className="home-container188 btn-1">
                  <span>Book a Call</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="contact" className="home-container189">
          <div className="home-container190">
            <span className="title">
              <span className="home-text204">Contact</span>
              <span> Us</span>
            </span>
            <span className="txt">
              Have questions or need more information? Fill out the contact form
              below, and we will get back to you shortly.
            </span>
          </div>
          <div className="home-container191">
            <div className="home-container192">
              <div className="home-container193">
                <div className="home-container194">
                  <span className="home-text207">First name*</span>
                  <div className="home-container195">
                    <input
                      type="text"
                      placeholder="John"
                      className="home-textinput1"
                    />
                  </div>
                </div>
                <div className="home-container196">
                  <span className="home-text208">Last name*</span>
                  <div className="home-container197">
                    <input
                      type="text"
                      placeholder="Doe"
                      className="home-textinput2"
                    />
                  </div>
                </div>
              </div>
              <div className="home-container198">
                <div className="home-container199">
                  <span className="home-text209">Email*</span>
                  <div className="home-container200">
                    <input
                      type="text"
                      placeholder="john.doe@gmail.com"
                      className="home-textinput3"
                    />
                  </div>
                </div>
                <div className="home-container201">
                  <span className="home-text210">Phone (Optional)</span>
                  <div className="home-container202">
                    <input
                      type="text"
                      placeholder="+1 23 456 789"
                      className="home-textinput4"
                    />
                  </div>
                </div>
              </div>
              <div className="home-container203">
                <div className="home-container204">
                  <span className="home-text211">Message*</span>
                  <div className="home-container205">
                    <textarea
                      placeholder="Please write your message here..."
                      className="home-textarea textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="btn-1">
                <span>Submit</span>
              </div>
            </div>
            <div className="home-container207">
              <img alt="image" src="/b2-600h.webp" className="home-image19" />
            </div>
          </div>
        </div>
        <div className="home-container208">
          <div className="home-container209">
            <div className="home-container210">
              <div className="home-container211">
                <div className="home-container212">
                  <img
                    alt="image"
                    src="/external/logo_txt_w-200h-200h.png"
                    className="home-image20"
                  />
                </div>
                <span className="text">
                  Elevate your sales game by thinking outside the box
                </span>
              </div>
              <div className="home-container213">
                <a
                  href="https://www.linkedin.com/company/traffls/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link21"
                >
                  <div className="home-container214">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon60"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/traffls_com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link22"
                >
                  <div className="home-container215">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon62"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="home-container216">
            <div className="home-container217">
              <span className="titel-2">EXPLORE</span>
              <a href="#top" className="home-link23">
                <div className="home-container218">
                  <span className="home-text215 text">Home</span>
                </div>
              </a>
              <a href="#aboutUs" className="home-link24">
                <div className="home-container219">
                  <span className="home-text216 text">About us</span>
                </div>
              </a>
              <a href="#pricing" className="home-link25">
                <div className="home-container220">
                  <span className="home-text217 text">Pricing</span>
                </div>
              </a>
              <a href="#howItWork" className="home-link26">
                <div className="home-container221">
                  <span className="home-text218 text">How it Works</span>
                </div>
              </a>
            </div>
            <div className="home-container222">
              <span className="home-text219 titel-2">SUPPORT</span>
              <Link to="/privacy-policy" className="home-navlink2">
                <div className="home-container223">
                  <span className="text home-text220">Privacy Policy</span>
                </div>
              </Link>
              <Link to="/imprint" className="home-navlink3">
                <div className="home-container224">
                  <span className="text home-text221">Imprint</span>
                </div>
              </Link>
            </div>
            <div className="home-container225">
              <span className="home-text222 titel-2">Contact info</span>
              <a href="mailto:info@up2data.io?subject=" className="home-link27">
                <div className="home-container226">
                  <span className="text">info@traffls.com</span>
                </div>
              </a>
              <span className="text">
                <span>Up2Data GmbH</span>
                <br></br>
                <span>Prinz-Ludwig-Straße 4</span>
                <br></br>
                <span>80333 München</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Mobilv></Mobilv>
    </div>
  )
}

export default Home
