import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import AskedQuestionsNew from '../components/asked-questions-new'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container100">
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
      <div className="page-container101">
        <div className="page-container102">
          <div className="page-container103">
            <div className="page-container104">
              <img
                alt="image"
                src="/logo_lila_cut-400w.png"
                className="page-image10"
              />
            </div>
            <span className="page-text100">Traffls</span>
          </div>
          <div className="page-container105">
            <a href="#company" className="page-link10">
              Company
            </a>
            <a href="#price" className="page-link11">
              Pricing
            </a>
            <a href="#hoeItWork" className="page-link12">
              How it work
            </a>
            <a href="#Contact" className="page-link13">
              Contact us
            </a>
          </div>
          <div className="page-container106">
            <a href="#cld" className="page-link14">
              <div className="page-container107 btn-1">
                <span>Book a Call</span>
              </div>
            </a>
            <a href="#howItWork" className="page-link15">
              <div className="page-container108 btn-2">
                <span>Login</span>
              </div>
            </a>
          </div>
        </div>
        <div className="page-container109">
          <div className="page-container110">
            <div className="page-container111">
              <div className="page-container112">
                <span className="page-text103">
                  <span className="page-text104">Increase</span>
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
                  <span className="page-text108">30%</span>
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
                  <span className="page-text112">3 months</span>
                </span>
                <span className="page-text113">
                  We generate a constant flow of B2B leads for you with a
                  predefined ROI and without upfront costs. Only pay for what
                  you get
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="page-container113">
                  <a href="#cld">
                    <div className="page-container114 btn-1">
                      <span>Book a Call</span>
                    </div>
                  </a>
                  <a href="#howItWork">
                    <div className="page-container115 btn-2">
                      <span>Our Services</span>
                    </div>
                  </a>
                </div>
                <div className="page-container116">
                  <input
                    type="text"
                    placeholder="john.doe@gmail.com"
                    className="page-textinput1"
                  />
                  <a href="#howItWork" className="page-link18">
                    <div className="page-container117 btn-1">
                      <span>Newslatter</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="page-container118">
              <img
                alt="image"
                src="/blockchain-hero-1-core-1500h.png"
                className="page-image11"
              />
            </div>
          </div>
          <div className="page-container119">
            <div className="page-container120">
              <div className="page-container121">
                <span className="page-text117">Scroll down</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="page-icon10"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                    <path
                      d="M13 2a6 6 0 0 1 5.996 5.775L19 8v8a6 6 0 0 1-5.775 5.996L13 22h-2a6 6 0 0 1-5.996-5.775L5 16V8a6 6 0 0 1 5.775-5.996L11 2zm0 2h-2a4 4 0 0 0-3.995 3.8L7 8v8a4 4 0 0 0 3.8 3.995L11 20h2a4 4 0 0 0 3.995-3.8L17 16V8a4 4 0 0 0-3.8-3.995zm-1 2a1 1 0 0 1 .993.883L13 7v4a1 1 0 0 1-1.993.117L11 11V7a1 1 0 0 1 1-1"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="company" className="page-container122">
        <div className="page-container123">
          <div className="page-container124">
            <div className="page-container125">
              <div className="page-container126">
                <span className="page-text118">
                  <span className="mainTitle">
                    Why Choose
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="page-text120">traffls?</span>
                </span>
              </div>
              <span className="page-text121">
                <span>
                  Traffls is the only service that not only guarantees you leads
                  but also guarantees a positive ROI on these leads. So you can
                  work with us and only pay when the outcome really benefits you
                  - no strings attached
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Our service, processes, and know-how are crafted by years of
                  B2B Sales experience and will help you to reach your next
                  growth goal faster and with less risk
                </span>
              </span>
            </div>
            <a href="#cld" className="page-link19">
              <div className="page-container127 btn-1">
                <span>Book a Call</span>
                <div className="page-container128">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="page-icon14"
                  >
                    <path
                      d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <div className="page-container129">
            <div className="page-container130">
              <div className="page-container131">
                <div className="page-container132">
                  <img
                    alt="image"
                    src="/user-engagement-200h.png"
                    className="page-image12"
                  />
                </div>
                <span className="page-text128">Guaranteed Leads</span>
              </div>
              <span className="page-text129">
                If we do not deliver, there is no cost involved. But do not
                worry, we will deliver
              </span>
            </div>
            <div className="page-container133">
              <div className="page-container134">
                <div className="page-container135">
                  <img
                    alt="image"
                    src="/growing-business-200h.png"
                    className="page-image13"
                  />
                </div>
                <span className="page-text130">Guaranteed positive ROI</span>
              </div>
              <span className="page-text131">
                After getting to know your business we will establish a ROI
                positive case for you so that you can grow your business healthy
              </span>
            </div>
          </div>
        </div>
        <div className="page-container136">
          <span className="page-text132 mainTitle">
            <span>
              Start Your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="page-text134">Lead Engine</span>
          </span>
          <span className="page-text135">
            Our goal is to help companies solve the growth problem by providing
            continuos leads they can convert into longterm customers.
          </span>
        </div>
        <div className="page-container137">
          <div className="page-container138">
            <div className="page-container139">
              <div className="page-container140">
                <img
                  alt="image"
                  src="/save-money%20(1)-200h.png"
                  className="page-image14"
                />
              </div>
              <span className="page-text136">No Upfront Costs</span>
              <span className="page-text137">
                The onboarding, the system setup, and everything else is on us.
                We want that you don&apos;t need to worry about anything other
                than closing more leads
              </span>
            </div>
            <div className="page-container141">
              <div className="page-container142">
                <img
                  alt="image"
                  src="/calendar1-200h.png"
                  className="page-image15"
                />
              </div>
              <span className="page-text138">No Monthly Fee</span>
              <span className="page-text139">
                There is also no monthly fee, as we do believe in performance.
                It is on us to make you happy and you should not pay for
                anything else
              </span>
            </div>
            <div className="page-container143">
              <div className="page-container144">
                <img
                  alt="image"
                  src="/agreement-200h.png"
                  className="page-image16"
                />
              </div>
              <span className="page-text140">No Minimum Contract</span>
              <span className="page-text141">
                So we also do not believe in lenghty contract durations. If you
                have the feeling that you want to move on, you can do it
                anytime. The question is if this will ever happen
              </span>
            </div>
            <div className="page-container145">
              <div className="page-container146">
                <img
                  alt="image"
                  src="/online-chat-200h.png"
                  className="page-image17"
                />
              </div>
              <span className="page-text142">Ongoing Support</span>
              <span className="page-text143">
                You will always have access to our team and your dedicated
                account manager. The support channel is open 24/7. We will be
                happy to make you happy
              </span>
            </div>
          </div>
          <div className="page-container147">
            <div className="page-container148">
              <div className="page-container149"></div>
              <div className="page-container150">
                <div className="page-container151"></div>
              </div>
              <div className="page-container152"></div>
            </div>
            <div className="page-container153">
              <div className="page-container154"></div>
              <div className="page-container155">
                <div className="page-container156"></div>
              </div>
              <div className="page-container157"></div>
            </div>
            <div className="page-container158">
              <div className="page-container159"></div>
              <div className="page-container160">
                <div className="page-container161"></div>
              </div>
              <div className="page-container162"></div>
            </div>
            <div className="page-container163">
              <div className="page-container164"></div>
              <div className="page-container165">
                <div className="page-container166"></div>
              </div>
              <div className="page-container167"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-container168">
        <div className="page-container169">
          <div className="page-container170">
            <span className="page-text144 mainTitle">
              <span>
                Book a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="page-text146">Discovery</span>
              <span> Call</span>
            </span>
            <span className="page-text148">
              <span>Ready to take your lead generation to the next level?</span>
              <br></br>
              <span>
                Schedule a discovery call with our experts to learn how traffls
                can help you achieve your goals.
              </span>
            </span>
          </div>
          <a href="#cld" className="page-link20">
            <div className="page-container171 btn-1">
              <span>Book a Call</span>
              <div className="page-container172">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="page-icon16"
                >
                  <path
                    d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div id="price" className="page-container173">
        <div className="page-container174">
          <div className="page-container175">
            <span className="page-text153 mainTitle">
              <span className="page-text154">Pricing</span>
              <span> that fits you</span>
            </span>
            <span className="page-text156">
              <span>In a call we will calculate your needs.</span>
              <br></br>
              <span>
                Our guarantee is that our Leads will be ROI positive for you.
              </span>
              <br></br>
              <span>
                Yet, every industry is different. So we need to get to know you
                first
              </span>
            </span>
          </div>
          <a href="#cld" className="page-link21">
            <div className="page-container176 btn-1">
              <span>Book a Call</span>
              <div className="page-container177">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="page-icon18"
                >
                  <path
                    d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
        <div className="page-container178">
          <div className="page-container179">
            <div className="page-container180">
              <div className="page-container181">
                <img
                  alt="image"
                  src="/logo_lila_cut-400w.png"
                  className="page-image18"
                />
              </div>
            </div>
            <span className="page-text163">Custom Quote</span>
            <span className="page-text164">Lorem hatu redi gandu</span>
          </div>
          <div className="page-container182">
            <div className="page-container183">
              <div className="page-container184">
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
              <div className="page-container185">
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
              <div className="page-container186">
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
            </div>
            <div className="page-container187">
              <div className="page-container188">
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
              <div className="page-container189">
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
          </div>
        </div>
      </div>
      <div id="hoeItWork" className="page-container190">
        <span className="page-text170 mainTitle">
          <span className="page-text171">
            Getting
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="page-text172">More Leads</span>
          <br className="page-text173"></br>
          <span className="page-text174">
            Has Never Been This
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="page-text175">Easy</span>
        </span>
        <div className="page-container191">
          <div className="page-container192">
            <div className="page-container193">
              <div className="page-container194">
                <div className="page-container195">
                  <span className="page-text176">1</span>
                </div>
              </div>
              <span className="page-text177">Book A Call</span>
              <span className="page-text178">
                We will get you know your company and answer some questions to
                better understand your needs
              </span>
            </div>
            <div className="page-container196">
              <div className="page-container197">
                <div className="page-container198">
                  <span className="page-text179">2</span>
                </div>
              </div>
              <span className="page-text180">Offer</span>
              <span className="page-text181">
                We will send you an offer which fulfills your needs so that your
                happiness can be guaranteed
              </span>
            </div>
          </div>
          <div className="page-container199">
            <div className="page-container200">
              <div className="page-container201">
                <div className="page-container202">
                  <span className="page-text182">3</span>
                </div>
              </div>
              <span className="page-text183">Onboarding</span>
              <span className="page-text184">
                We will prepare everything on our side and setup the system so
                that we can send new leads to your systems
              </span>
            </div>
            <div className="page-container203">
              <div className="page-container204">
                <div className="page-container205">
                  <span className="page-text185">4</span>
                </div>
              </div>
              <span className="page-text186">Done</span>
              <span className="page-text187">
                You are now ready to get more leads on a constant basis to grow
                your business faster
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="page-container206">
        <div className="page-container207">
          <img
            alt="image"
            src="/external/logo_txt_w-200h-400h.png"
            className="page-image19"
          />
        </div>
        <div className="page-container208">
          <span className="page-text188 mainTitle">
            <span className="page-text189">Sing up for</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="page-text191">Newslatter</span>
          </span>
          <span className="page-text192">
            <span className="page-text193">
              You&apos;ll be informed about updates, special offers and planned
            </span>
            <br className="page-text194"></br>
            <span className="page-text195">
              changes to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="page-text196">Traffls</span>
            <span className="page-text197">!</span>
          </span>
        </div>
        <div className="page-container209">
          <input
            type="text"
            placeholder="john.doe@gmail.com"
            className="page-textinput2"
          />
          <a href="#howItWork" className="page-link22">
            <div className="page-container210">
              <span className="page-text198">Sing up</span>
              <div className="page-container211">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="page-icon30"
                >
                  <path
                    d="m5 13l4 4L19 7"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-container212">
        <div className="page-container213">
          <span className="page-text199">
            <span className="mainTitle">
              Frequently Asked
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="page-text201">Questions</span>
          </span>
          <AskedQuestionsNew
            text1={
              <Fragment>
                <span className="page-text202">
                  Does the setup cost anything?
                </span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="page-text203">
                  No, there is no setup fee. We believe in the long-term value
                  of our service, so we focus on delivering results without any
                  upfront costs. This allows you to start without any financial
                  barriers, trusting that our service will prove its value over
                  time.
                </span>
              </Fragment>
            }
            text12={
              <Fragment>
                <span className="page-text204">Is there a monthly fee?</span>
              </Fragment>
            }
            text13={
              <Fragment>
                <span className="page-text205">+</span>
              </Fragment>
            }
            text14={
              <Fragment>
                <span className="page-text206">
                  Does the setup cost anything?
                </span>
              </Fragment>
            }
            text82={
              <Fragment>
                <span className="page-text207">
                  No, there is no setup fee. We believe in the long-term value
                  of our service, so we focus on delivering results without any
                  upfront costs. This allows you to start without any financial
                  barriers, trusting that our service will prove its value over
                  time.
                </span>
              </Fragment>
            }
            text102={
              <Fragment>
                <span className="page-text208">+</span>
              </Fragment>
            }
            text121={
              <Fragment>
                <span className="page-text209">
                  Is there a minimum contract time?
                </span>
              </Fragment>
            }
            text122={
              <Fragment>
                <span className="page-text210">Is there a monthly fee?</span>
              </Fragment>
            }
            text821={
              <Fragment>
                <span className="page-text211">
                  No, there is no setup fee. We believe in the long-term value
                  of our service, so we focus on delivering results without any
                  upfront costs. This allows you to start without any financial
                  barriers, trusting that our service will prove its value over
                  time.
                </span>
              </Fragment>
            }
            text1012={
              <Fragment>
                <span className="page-text212">+</span>
              </Fragment>
            }
            text1211={
              <Fragment>
                <span className="page-text213">
                  How do you determine the price for a lead?
                </span>
              </Fragment>
            }
            text1212={
              <Fragment>
                <span className="page-text214">
                  Is there a minimum contract time?
                </span>
              </Fragment>
            }
            text8211={
              <Fragment>
                <span className="page-text215">
                  No, there is no setup fee. We believe in the long-term value
                  of our service, so we focus on delivering results without any
                  upfront costs. This allows you to start without any financial
                  barriers, trusting that our service will prove its value over
                  time.
                </span>
              </Fragment>
            }
            text10111={
              <Fragment>
                <span className="page-text216">+</span>
              </Fragment>
            }
            text12111={
              <Fragment>
                <span className="page-text217">
                  How do you determine the price for a lead?
                </span>
              </Fragment>
            }
          ></AskedQuestionsNew>
        </div>
        <div className="page-container214">
          <div className="page-container215">
            <span className="page-text218">Do you have more questions?</span>
            <span className="page-text219">
              If you have any further questions or need additional information,
              feel free to reach out to us! We’re here to help and would love to
              assist you in any way we can. Don’t hesitate to contact us – we’re
              just a message away!
            </span>
            <a href="#cld" className="page-link23">
              <div className="page-container216 btn-1">
                <span>Book a Call</span>
                <div className="page-container217">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="page-icon32"
                  >
                    <path
                      d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="Contact" className="page-container218">
        <div className="page-container219">
          <span className="page-text221 mainTitle">
            <span>
              Start Your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="page-text223">Lead Engine</span>
          </span>
          <span className="page-text224">
            Our goal is to help companies solve the growth problem by providing
            continuos leads they can convert into longterm customers.
          </span>
        </div>
        <div className="page-container220">
          <div className="page-container221">
            <div className="page-container222">
              <div className="page-container223">
                <span className="page-text225">First name*</span>
                <div className="page-container224">
                  <input
                    type="text"
                    placeholder="John"
                    className="page-textinput3"
                  />
                </div>
              </div>
              <div className="page-container225">
                <span className="page-text226">Last name*</span>
                <div className="page-container226">
                  <input
                    type="text"
                    placeholder="Doe"
                    className="page-textinput4"
                  />
                </div>
              </div>
            </div>
            <div className="page-container227">
              <div className="page-container228">
                <span className="page-text227">Email*</span>
                <div className="page-container229">
                  <input
                    type="text"
                    placeholder="john.doe@gmail.com"
                    className="page-textinput5"
                  />
                </div>
              </div>
              <div className="page-container230">
                <span className="page-text228">Phone (Optional)</span>
                <div className="page-container231">
                  <input
                    type="text"
                    placeholder="+1 23 456 789"
                    className="page-textinput6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="page-container232">
            <span className="page-text229">Message*</span>
            <div className="page-container233">
              <textarea
                placeholder="Please write your message here..."
                className="page-textarea textarea"
              ></textarea>
            </div>
          </div>
        </div>
        <a href="#cld" className="page-link24">
          <div className="page-container234 btn-1">
            <span>Submit</span>
          </div>
        </a>
      </div>
      <div className="page-container235">
        <div className="page-container236">
          <div className="page-container237">
            <div className="page-container238">
              <div className="page-container239">
                <img
                  alt="image"
                  src="/external/logo_txt_w-200h-400h.png"
                  className="page-image20"
                />
              </div>
              <span className="text">
                Elevate your sales game by thinking outside the box
              </span>
            </div>
            <div className="page-container240">
              <a
                href="https://www.linkedin.com/company/traffls/"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link25"
              >
                <div className="page-container241">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="page-icon34"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://www.instagram.com/traffls_com/"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link26"
              >
                <div className="page-container242">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="page-icon36"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="page-container243">
          <div className="page-container244">
            <span className="titel-2">EXPLORE</span>
            <a href="#top" className="page-link27">
              <div className="page-container245">
                <span className="page-text233 text">Home</span>
              </div>
            </a>
            <a href="#aboutUs" className="page-link28">
              <div className="page-container246">
                <span className="page-text234 text">About us</span>
              </div>
            </a>
            <a href="#pricing" className="page-link29">
              <div className="page-container247">
                <span className="page-text235 text">Pricing</span>
              </div>
            </a>
            <a href="#howItWork" className="page-link30">
              <div className="page-container248">
                <span className="page-text236 text">How it Works</span>
              </div>
            </a>
          </div>
          <div className="page-container249">
            <span className="page-text237 titel-2">SUPPORT</span>
            <Link to="/privacy-policy" className="page-navlink1">
              <div className="page-container250">
                <span className="text page-text238">Privacy Policy</span>
              </div>
            </Link>
            <Link to="/imprint" className="page-navlink2">
              <div className="page-container251">
                <span className="text page-text239">Imprint</span>
              </div>
            </Link>
          </div>
          <div className="page-container252">
            <span className="page-text240 titel-2">Contact info</span>
            <a href="mailto:info@up2data.io?subject=" className="page-link31">
              <div className="page-container253">
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
      <div className="page-container254"></div>
    </div>
  )
}

export default Page
