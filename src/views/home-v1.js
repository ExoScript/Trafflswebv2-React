import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import AskedQuestions from '../components/asked-questions'
import Mobilv from '../components/mobilv'
import './home-v1.css'

const HomeV1 = (props) => {
  return (
    <div className="home-v1-container100">
      <Helmet>
        <title>Home-V1 - Traffls</title>
        <meta
          name="description"
          content="Boost your B2B leads by 30% in 3 months with no upfront costs and guaranteed ROI. Pay only for results. Book a call with Traffls and grow your business now!"
        />
        <meta property="og:title" content="Home-V1 - Traffls" />
        <meta
          property="og:description"
          content="Boost your B2B leads by 30% in just 3 months with no upfront costs or long contracts. Only pay for leads with guaranteed positive ROI. Traffls helps your business grow faster. Book a discovery call!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/37438957-1937-49c8-919d-bbaaa2990153/376e1323-8f7f-45d1-a446-e12e4a47f9d9?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="home-v1-webv">
        <div className="home-v1-container101">
          <div className="home-v1-container102">
            <div className="home-v1-container103">
              <Link to="/" className="home-v1-navlink1">
                <img
                  alt="image"
                  src="/logo_lila_cut-200w.png"
                  className="home-v1-image10"
                />
              </Link>
            </div>
          </div>
          <div className="home-v1-container104">
            <div className="home-v1-container105 menu-btn">
              <span>Home</span>
            </div>
            <a href="#aboutUs" className="home-v1-link10">
              <div className="home-v1-container106 menu-btn">
                <span>About us</span>
              </div>
            </a>
            <a href="#pricing" className="home-v1-link11">
              <div className="home-v1-container107 menu-btn">
                <span>Pricing</span>
              </div>
            </a>
            <a href="#howItWork" className="home-v1-link12">
              <div className="home-v1-container108 menu-btn">
                <span>How it Works</span>
              </div>
            </a>
            <a href="#testimonials" className="home-v1-link13">
              <div className="home-v1-container109 menu-btn">
                <span>Testimonials</span>
              </div>
            </a>
            <a href="#contact" className="home-v1-link14">
              <div className="home-v1-container110 menu-btn">
                <span>Contact us</span>
              </div>
            </a>
          </div>
          <div className="home-v1-container111">
            <a href="#cld" className="home-v1-link15">
              <div className="home-v1-container112 btn-1">
                <span>Book a Call</span>
              </div>
            </a>
          </div>
        </div>
        <div id="top" className="home-v1-container113">
          <div className="home-v1-container114">
            <div className="home-v1-container115">
              <span className="home-v1-text107">
                <span className="home-v1-text108">Increase</span>
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
                <span className="home-v1-text112">30%</span>
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
                <span className="home-v1-text116">3 months</span>
              </span>
              <span className="home-v1-text117">
                We generate a constant flow of B2B leads for you with a
                predefined ROI and without upfront costs. Only pay for what you
                get
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="home-v1-container116">
                <a href="#cld" className="home-v1-link16">
                  <div className="home-v1-container117 btn-1">
                    <span>Book a Call</span>
                  </div>
                </a>
                <a href="#howItWork" className="home-v1-link17">
                  <div className="home-v1-container118 btn-2">
                    <span>Our Services</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="home-v1-container119">
              <img
                alt="image"
                src="/b1-600h.webp"
                className="home-v1-image11"
              />
            </div>
          </div>
        </div>
        <div className="home-v1-container120">
          <span className="home-v1-text120 title">
            <span className="home-v1-text121">B2B Leads</span>
            <span> without Risk</span>
          </span>
          <span className="home-v1-text123 txt">
            Trusted by leading SaaS Companies in Europe
          </span>
          <div className="home-v1-container121"></div>
        </div>
        <div id="aboutUs" className="home-v1-container122">
          <div className="home-v1-container123">
            <div className="home-v1-container124">
              <span className="home-v1-text124">
                <span>
                  Why Choose
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-v1-text126">traffls?</span>
              </span>
              <div className="home-v1-container125">
                <span className="home-v1-text127">
                  traffls is the only service that not only guarantees you leads
                  but also guarantees a positive ROI on these leads. So you can
                  work with us and only pay when the outcome really benefits you
                  - no strings attached
                </span>
                <span className="home-v1-text128"> </span>
                <span className="home-v1-text129">
                  Our service, processes, and know-how are crafted by years of
                  B2B Sales experience and will help you to reach your next
                  growth goal faster and with less risk
                </span>
              </div>
              <a href="#cld" className="home-v1-link18">
                <div className="home-v1-container126 btn-1">
                  <span>Book a Call</span>
                </div>
              </a>
            </div>
            <div className="home-v1-container127">
              <img
                alt="image"
                src="/b3-900h.webp"
                className="home-v1-image12"
              />
            </div>
          </div>
          <div className="home-v1-container128">
            <div className="home-v1-container129">
              <div className="home-v1-container130">
                <img
                  alt="image"
                  src="/user-engagement-200h.png"
                  className="home-v1-image13"
                />
              </div>
              <div className="home-v1-container131">
                <span className="home-v1-text131">Guaranteed Leads</span>
                <span className="home-v1-text132">
                  If we do not deliver, there is no cost involved. But do not
                  worry, we will deliver
                </span>
              </div>
            </div>
            <div className="home-v1-container132">
              <div className="home-v1-container133">
                <img
                  alt="image"
                  src="/growing-business-200h.png"
                  className="home-v1-image14"
                />
              </div>
              <div className="home-v1-container134">
                <span className="home-v1-text133">Guaranteed positive ROI</span>
                <span className="home-v1-text134">
                  After getting to know your business we will establish a ROI
                  positive case for you so that you can grow your business
                  healthy
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-v1-container135">
          <div className="home-v1-container136">
            <span className="home-v1-text135 title">
              <span>
                Start Your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-v1-text137">Lead Engine</span>
            </span>
            <span className="home-v1-text138 txt">
              Our goal is to help companies solve the growth problem by
              providing continuos leads they can convert into longterm
              customers.
            </span>
          </div>
          <div className="home-v1-container137">
            <div className="home-v1-container138">
              <div className="home-v1-container139">
                <div className="home-v1-container140">
                  <img
                    alt="image"
                    src="/badge-200h.png"
                    className="home-v1-image15"
                  />
                </div>
                <span className="home-v1-text139">No Upfront Costs</span>
                <span className="home-v1-text140">
                  The onboarding, the system setup, and everything else is on
                  us. We want that you don&apos;t need to worry about anything
                  other than closing more leads
                </span>
              </div>
              <div className="home-v1-container141">
                <div className="home-v1-container142">
                  <img
                    alt="image"
                    src="/calendar-200h.png"
                    className="home-v1-image16"
                  />
                </div>
                <span className="home-v1-text141">No Monthly Fee</span>
                <span className="home-v1-text142">
                  There is also no monthly fee, as we do believe in performance.
                  It is on us to make you happy and you should not pay for
                  anything else
                </span>
              </div>
            </div>
            <div className="home-v1-container143">
              <div className="home-v1-container144">
                <div className="home-v1-container145">
                  <img
                    alt="image"
                    src="/paper-200h.png"
                    className="home-v1-image17"
                  />
                </div>
                <span className="home-v1-text143">No Minimum Contract</span>
                <span className="home-v1-text144">
                  So we also do not believe in lenghty contract durations. If
                  you have the feeling that you want to move on, you can do it
                  anytime. The question is if this will ever happen
                </span>
              </div>
              <div className="home-v1-container146">
                <div className="home-v1-container147">
                  <img
                    alt="image"
                    src="/collaboration-200h.png"
                    className="home-v1-image18"
                  />
                </div>
                <span className="home-v1-text145">Ongoing Support</span>
                <span className="home-v1-text146">
                  You will always have access to our team and your dedicated
                  account manager. The support channel is open 24/7. We will be
                  happy to make you happy
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="howItWork" className="home-v1-container148">
          <span className="home-v1-text147">
            <span className="home-v1-text148">Getting More Leads</span>
            <span>
              {' '}
              Has Never Been This
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-v1-text150">Easy</span>
          </span>
          <div className="home-v1-container149">
            <div className="home-v1-container150">
              <div className="home-v1-container151">
                <div className="home-v1-container152">
                  <div className="home-v1-container153">
                    <span className="home-v1-text151">1</span>
                  </div>
                </div>
                <div className="home-v1-container154">
                  <span className="home-v1-text152">Book A Call</span>
                  <span className="home-v1-text153">
                    We will get you know your company and answer some questions
                    to better understand your needs
                  </span>
                </div>
              </div>
              <div className="home-v1-container155">
                <div className="home-v1-container156">
                  <div className="home-v1-container157">
                    <span className="home-v1-text154">2</span>
                  </div>
                </div>
                <div className="home-v1-container158">
                  <span className="home-v1-text155">Offer</span>
                  <span className="home-v1-text156">
                    We will send you an offer which fulfills your needs so that
                    your happiness can be guaranteed
                  </span>
                </div>
              </div>
            </div>
            <div className="home-v1-container159">
              <div className="home-v1-container160">
                <div className="home-v1-container161">
                  <div className="home-v1-container162">
                    <span className="home-v1-text157">3</span>
                  </div>
                </div>
                <div className="home-v1-container163">
                  <span className="home-v1-text158">Onboarding</span>
                  <span className="home-v1-text159">
                    We will prepare everything on our side and setup the system
                    so that we can send new leads to your systems
                  </span>
                </div>
              </div>
              <div className="home-v1-container164">
                <div className="home-v1-container165">
                  <div className="home-v1-container166">
                    <span className="home-v1-text160">4</span>
                  </div>
                </div>
                <div className="home-v1-container167">
                  <span className="home-v1-text161">Done</span>
                  <span className="home-v1-text162">
                    You are now ready to get more leads on a constant basis to
                    grow your business faster
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="pricing" className="home-v1-container168">
          <div className="home-v1-container169">
            <span className="title">
              <span className="home-v1-text164">Pricing</span>
              <span> that fits you</span>
            </span>
            <span className="home-v1-text166 txt">
              In a call we will calculate your needs. Our guarantee is that our
              Leads will be ROI positive for you. Yet, every industry is
              different. So we need to get to know you first
            </span>
          </div>
          <div className="home-v1-container170">
            <div className="home-v1-container171">
              <span className="home-v1-text167">Custom Lead Generation</span>
              <span className="home-v1-text168">Custom Quote</span>
              <span>N/A</span>
            </div>
            <div className="home-v1-container172">
              <div className="home-v1-container173">
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
              <div className="home-v1-container174">
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
              <div className="home-v1-container175">
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
              <div className="home-v1-container176">
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
              <div className="home-v1-container177">
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
            <a href="#cld" className="home-v1-link19">
              <div className="home-v1-container178 btn-1">
                <span>Book a Call</span>
              </div>
            </a>
          </div>
        </div>
        <div id="testimonials" className="home-v1-container179">
          <div className="home-v1-container180">
            <span className="title">
              <span>
                Hear from Our
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-v1-text178">Satisfied Clients</span>
            </span>
            <span className="home-v1-text179 txt">
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
            className="home-v1-slider swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="home-v1-slider-slide1 swiper-slide"
              >
                <div className="home-v1-column1 thq-card">
                  <div className="home-v1-stars1">
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
                  <div className="home-v1-avatar1">
                    <img
                      alt="CEO of TechSaaS"
                      src="https://images.unsplash.com/photo-1522845015757-50bce044e5da?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTEyODI4Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
                      className="home-v1-avatar-image1 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="home-v1-avatar-content1">
                      <span>Default value</span>
                      <span>Default value</span>
                    </div>
                  </div>
                </div>
                <div className="home-v1-column2 thq-card">
                  <div className="home-v1-stars2">
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
                  <div className="home-v1-avatar2">
                    <img
                      alt="Marketing Director of SoftCloud"
                      src="https://images.unsplash.com/photo-1525357816819-392d2380d821?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTEyODI4Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
                      className="home-v1-avatar-image2 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="home-v1-avatar-content2">
                      <span>Default value</span>
                      <span>Default value</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="home-v1-slider-slide2 swiper-slide"
              >
                <div className="home-v1-column3 thq-card">
                  <div className="home-v1-stars3">
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
                  <div className="home-v1-avatar3">
                    <img
                      alt="COO of DataTech"
                      src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTEyODI4Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
                      className="home-v1-avatar-image3 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="home-v1-avatar-content3">
                      <span>Default value</span>
                      <span>Default value</span>
                    </div>
                  </div>
                </div>
                <div className="home-v1-column4 thq-card">
                  <div className="home-v1-stars4">
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
                  <div className="home-v1-avatar4">
                    <img
                      alt="CFO of CloudWorks"
                      src="https://images.unsplash.com/photo-1615712278090-a935af124081?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTEyODI4M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
                      className="home-v1-avatar-image4 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="home-v1-avatar-content4">
                      <span>Default value</span>
                      <span>Default value</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="home-v1-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
        <div id="cld" className="home-v1-container181">
          <div className="home-v1-container182">
            <span className="title">
              <span>
                Book a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-v1-text194">Discovery</span>
              <span> Call</span>
            </span>
            <span className="home-v1-text196 txt">
              Ready to take your lead generation to the next level? Schedule a
              discovery call with our experts to learn how traffls can help you
              achieve your goals.
            </span>
          </div>
          <div className="home-v1-container183">
            <div className="home-v1-container184">
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
        <div className="home-v1-container185">
          <span className="title">
            <span>
              Frequently Asked
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-v1-text199">Questions</span>
          </span>
          <div className="home-v1-container186">
            <AskedQuestions></AskedQuestions>
            <div className="home-v1-container187">
              <span className="home-v1-text200">
                Do you have more questions?
              </span>
              <span className="home-v1-text201">
                If you have any further questions or need additional
                information, feel free to reach out to us! We’re here to help
                and would love to assist you in any way we can. Don’t hesitate
                to contact us – we’re just a message away!
              </span>
              <a href="#cld" className="home-v1-link20">
                <div className="home-v1-container188 btn-1">
                  <span>Book a Call</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="contact" className="home-v1-container189">
          <div className="home-v1-container190">
            <span className="title">
              <span className="home-v1-text204">Contact</span>
              <span> Us</span>
            </span>
            <span className="txt">
              Have questions or need more information? Fill out the contact form
              below, and we will get back to you shortly.
            </span>
          </div>
          <div className="home-v1-container191">
            <div className="home-v1-container192">
              <div className="home-v1-container193">
                <div className="home-v1-container194">
                  <span className="home-v1-text207">First name*</span>
                  <div className="home-v1-container195">
                    <input
                      type="text"
                      placeholder="John"
                      className="home-v1-textinput1"
                    />
                  </div>
                </div>
                <div className="home-v1-container196">
                  <span className="home-v1-text208">Last name*</span>
                  <div className="home-v1-container197">
                    <input
                      type="text"
                      placeholder="Doe"
                      className="home-v1-textinput2"
                    />
                  </div>
                </div>
              </div>
              <div className="home-v1-container198">
                <div className="home-v1-container199">
                  <span className="home-v1-text209">Email*</span>
                  <div className="home-v1-container200">
                    <input
                      type="text"
                      placeholder="john.doe@gmail.com"
                      className="home-v1-textinput3"
                    />
                  </div>
                </div>
                <div className="home-v1-container201">
                  <span className="home-v1-text210">Phone (Optional)</span>
                  <div className="home-v1-container202">
                    <input
                      type="text"
                      placeholder="+1 23 456 789"
                      className="home-v1-textinput4"
                    />
                  </div>
                </div>
              </div>
              <div className="home-v1-container203">
                <div className="home-v1-container204">
                  <span className="home-v1-text211">Message*</span>
                  <div className="home-v1-container205">
                    <textarea
                      placeholder="Please write your message here..."
                      className="home-v1-textarea textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="btn-1">
                <span>Submit</span>
              </div>
            </div>
            <div className="home-v1-container207">
              <img
                alt="image"
                src="/b2-600h.webp"
                className="home-v1-image19"
              />
            </div>
          </div>
        </div>
        <div className="home-v1-container208">
          <div className="home-v1-container209">
            <div className="home-v1-container210">
              <div className="home-v1-container211">
                <div className="home-v1-container212">
                  <img
                    alt="image"
                    src="/external/logo_txt_w-200h-200h.png"
                    className="home-v1-image20"
                  />
                </div>
                <span className="text">
                  Elevate your sales game by thinking outside the box
                </span>
              </div>
              <div className="home-v1-container213">
                <a
                  href="https://www.linkedin.com/company/traffls/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-v1-link21"
                >
                  <div className="home-v1-container214">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-v1-icon60"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/traffls_com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-v1-link22"
                >
                  <div className="home-v1-container215">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-v1-icon62"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="home-v1-container216">
            <div className="home-v1-container217">
              <span className="titel-2">EXPLORE</span>
              <a href="#top" className="home-v1-link23">
                <div className="home-v1-container218">
                  <span className="home-v1-text215 text">Home</span>
                </div>
              </a>
              <a href="#aboutUs" className="home-v1-link24">
                <div className="home-v1-container219">
                  <span className="home-v1-text216 text">About us</span>
                </div>
              </a>
              <a href="#pricing" className="home-v1-link25">
                <div className="home-v1-container220">
                  <span className="home-v1-text217 text">Pricing</span>
                </div>
              </a>
              <a href="#howItWork" className="home-v1-link26">
                <div className="home-v1-container221">
                  <span className="home-v1-text218 text">How it Works</span>
                </div>
              </a>
            </div>
            <div className="home-v1-container222">
              <span className="home-v1-text219 titel-2">SUPPORT</span>
              <Link to="/privacy-policy" className="home-v1-navlink2">
                <div className="home-v1-container223">
                  <span className="text home-v1-text220">Privacy Policy</span>
                </div>
              </Link>
              <Link to="/imprint" className="home-v1-navlink3">
                <div className="home-v1-container224">
                  <span className="text home-v1-text221">Imprint</span>
                </div>
              </Link>
            </div>
            <div className="home-v1-container225">
              <span className="home-v1-text222 titel-2">Contact info</span>
              <a
                href="mailto:info@up2data.io?subject="
                className="home-v1-link27"
              >
                <div className="home-v1-container226">
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

export default HomeV1
