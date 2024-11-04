import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import AskedQuestionsNew from './asked-questions-new'
import './main-content.css'

const MainContent = (props) => {
  const [newslatter, setNewslatter] = useState(false)
  return (
    <div className="main-content-main-content">
      <div className="main-content-container100">
        <div className="main-content-container101">
          <div className="main-content-container102">
            <div className="main-content-container103">
              <div className="main-content-container104">
                <img
                  alt="image"
                  src="/logo_lila_cut-400w.png"
                  className="main-content-image10"
                />
              </div>
            </div>
            <span className="main-content-text100">Traffls</span>
          </div>
          <div className="main-content-container105">
            <span className="main-content-text101">Company</span>
            <a href="#price" className="main-content-link10">
              Pricing
            </a>
            <a href="#hoeItWork" className="main-content-link11">
              How it work
            </a>
            <a href="#Contact" className="main-content-link12">
              Contact us
            </a>
          </div>
          <div className="main-content-container106">
            <a href="#call" className="main-content-link13">
              <div className="main-content-container107 btn-1">
                <span>Book a Call</span>
              </div>
            </a>
            <a href="#howItWork" className="main-content-link14">
              <div className="main-content-container108 btn-2">
                <span>Login</span>
              </div>
            </a>
          </div>
          <div className="main-content-container109">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path
                  d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="main-content-container110">
          <div className="main-content-container111">
            <div className="main-content-container112">
              <div className="main-content-container113">
                <div className="main-content-container114">
                  <img
                    alt="image"
                    src="/external/logo_txt_w-200h-500h.png"
                    className="main-content-image11"
                  />
                </div>
                <span className="main-content-text104">
                  {props.text61 ?? (
                    <Fragment>
                      <span className="main-content-text258">
                        <span className="main-content-text259">Increase</span>
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
                        <span className="main-content-text263">30%</span>
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
                        <span className="main-content-text267">3 months</span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="main-content-container115">
                  <div className="main-content-container116">
                    <span className="main-content-text105">
                      We generate a constant flow of B2B leads for you with a
                      predefined ROI and without upfront costs. Only pay for
                      what you get
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a href="#call" className="main-content-link15">
                      <div className="main-content-container117 btn-1">
                        <span>Book a Call</span>
                        <div className="main-content-container118">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            className="main-content-icon14"
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
                  {newslatter === false && (
                    <div className="main-content-container119">
                      <div className="main-content-container120">
                        <input
                          type="text"
                          placeholder={props.textinputPlaceholder1}
                          className="main-content-textinput1"
                        />
                        <a href="#howItWork" className="main-content-link16">
                          <div
                            onClick={() => setNewslatter(true)}
                            className="main-content-container121 btn-1"
                          >
                            <span>
                              {props.text82 ?? (
                                <Fragment>
                                  <span className="main-content-text293">
                                    Newslatter
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <div className="main-content-container122">
                  <a href="#cld">
                    <div className="main-content-container123 btn-1">
                      <span>
                        {props.text80 ?? (
                          <Fragment>
                            <span className="main-content-text287">
                              Book a Call
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </a>
                  <a href="#howItWork">
                    <div className="main-content-container124 btn-2">
                      <span>
                        {props.text81 ?? (
                          <Fragment>
                            <span className="main-content-text254">
                              Our Services
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </a>
                </div>
                {newslatter === true && (
                  <div className="main-content-container125">
                    <div className="main-content-container126">
                      <span className="main-content-text110">
                        {props.text1 ?? (
                          <Fragment>
                            <span className="main-content-text276">
                              <span className="main-content-text277">
                                Thank you for subscribing!
                              </span>
                              <br></br>
                              <span>
                                You are now part of our exclusive newsletter.
                                Look forward to regular updates, exciting
                                content, and exclusive offers straight to your
                                inbox.
                              </span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="main-content-container127">
              <img
                alt="image"
                src="/blockchain-hero-1-core-1500h.png"
                className="main-content-image12"
              />
            </div>
          </div>
          <div className="main-content-container128">
            <a href="#company" className="main-content-link19">
              <div className="main-content-container129">
                <div className="main-content-container130">
                  <span className="main-content-text111">
                    {props.text63 ?? (
                      <Fragment>
                        <span className="main-content-text255">
                          Scroll down
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="main-content-container131">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="main-content-icon16"
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
            </a>
          </div>
        </div>
      </div>
      <div id="company" className="main-content-container132">
        <div className="main-content-container133">
          <div className="main-content-container134">
            <div className="main-content-container135">
              <div className="main-content-container136">
                <span className="main-content-text112">
                  {props.text64 ?? (
                    <Fragment>
                      <span className="main-content-text282">
                        <span className="mainTitle main-content-text283">
                          Why Choose
                        </span>
                        <span className="mainTitle">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="main-content-text285">traffls?</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span className="main-content-text113">
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
            <a href="#call" className="main-content-link20">
              <div className="main-content-container137 btn-1">
                <span>Book a Call</span>
                <div className="main-content-container138">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="main-content-icon20"
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
          <div className="main-content-container139">
            <div className="main-content-container140">
              <div className="main-content-container141">
                <div className="main-content-container142">
                  <img
                    alt="image"
                    src="/user-engagement-200h.png"
                    className="main-content-image13"
                  />
                </div>
                <span>
                  {props.text65 ?? (
                    <Fragment>
                      <span className="main-content-text298">
                        Guaranteed Leads
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span className="main-content-text121">
                If we do not deliver, there is no cost involved. But do not
                worry, we will deliver
              </span>
            </div>
            <div className="main-content-container143">
              <div className="main-content-container144">
                <div className="main-content-container145">
                  <img
                    alt="image"
                    src="/growing-business-200h.png"
                    className="main-content-image14"
                  />
                </div>
                <span>
                  {props.text66 ?? (
                    <Fragment>
                      <span className="main-content-text300">
                        Guaranteed positive ROI
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span className="main-content-text123">
                After getting to know your business we will establish a ROI
                positive case for you so that you can grow your business healthy
              </span>
            </div>
          </div>
        </div>
        <div className="main-content-container146">
          <span className="main-content-text124">
            <span>
              Start Your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="main-content-text126">Lead Engine</span>
          </span>
          <span className="main-content-text127">
            Our goal is to help companies solve the growth problem by providing
            continuos leads they can convert into longterm customers.
          </span>
        </div>
        <div className="main-content-container147">
          <div className="main-content-container148">
            <div className="main-content-container149">
              <div className="main-content-container150">
                <img
                  alt="image"
                  src="/save-money%20(1)-200h.png"
                  className="main-content-image15"
                />
              </div>
              <span className="main-content-text128">No Upfront Costs</span>
              <span className="main-content-text129">
                The onboarding, the system setup, and everything else is on us.
                We want that you don&apos;t need to worry about anything other
                than closing more leads
              </span>
            </div>
            <div className="main-content-container151">
              <div className="main-content-container152">
                <img
                  alt="image"
                  src="/calendar1-200h.png"
                  className="main-content-image16"
                />
              </div>
              <span className="main-content-text130">No Monthly Fee</span>
              <span className="main-content-text131">
                There is also no monthly fee, as we do believe in performance.
                It is on us to make you happy and you should not pay for
                anything else
              </span>
            </div>
            <div className="main-content-container153">
              <div className="main-content-container154">
                <img
                  alt="image"
                  src="/agreement-200h.png"
                  className="main-content-image17"
                />
              </div>
              <span className="main-content-text132">No Minimum Contract</span>
              <span className="main-content-text133">
                So we also do not believe in lenghty contract durations. If you
                have the feeling that you want to move on, you can do it
                anytime. The question is if this will ever happen
              </span>
            </div>
            <div className="main-content-container155">
              <div className="main-content-container156">
                <img
                  alt="image"
                  src="/online-chat-200h.png"
                  className="main-content-image18"
                />
              </div>
              <span className="main-content-text134">Ongoing Support</span>
              <span className="main-content-text135">
                You will always have access to our team and your dedicated
                account manager. The support channel is open 24/7. We will be
                happy to make you happy
              </span>
            </div>
          </div>
          <div className="main-content-container157">
            <div className="main-content-container158">
              <div className="main-content-container159"></div>
              <div className="main-content-container160">
                <div className="main-content-container161"></div>
              </div>
              <div className="main-content-container162"></div>
            </div>
            <div className="main-content-container163">
              <div className="main-content-container164"></div>
              <div className="main-content-container165">
                <div className="main-content-container166"></div>
              </div>
              <div className="main-content-container167"></div>
            </div>
            <div className="main-content-container168">
              <div className="main-content-container169"></div>
              <div className="main-content-container170">
                <div className="main-content-container171"></div>
              </div>
              <div className="main-content-container172"></div>
            </div>
            <div className="main-content-container173">
              <div className="main-content-container174"></div>
              <div className="main-content-container175">
                <div className="main-content-container176"></div>
              </div>
              <div className="main-content-container177"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content-container178">
        <div className="main-content-container179">
          <div className="main-content-container180">
            <span className="main-content-text136">
              <span>
                Book a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="main-content-text138">Discovery</span>
              <span> Call</span>
            </span>
            <span className="main-content-text140">
              <span>Ready to take your lead generation to the next level?</span>
              <br></br>
              <span>
                Schedule a discovery call with our experts to learn how traffls
                can help you achieve your goals.
              </span>
            </span>
          </div>
          <a href="#call" className="main-content-link21">
            <div className="btn-1">
              <span>Book a Call</span>
              <div className="main-content-container182">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="main-content-icon22"
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
      <div id="price" className="main-content-container183">
        <div className="main-content-container184">
          <div className="main-content-container185">
            <span className="main-content-text145">
              <span className="main-content-text146">Pricing</span>
              <span> that fits you</span>
            </span>
            <span className="main-content-text148">
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
          <a href="#call" className="main-content-link22">
            <div className="main-content-container186 btn-1">
              <span>Book a Call</span>
              <div className="main-content-container187">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="main-content-icon24"
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
        <div className="main-content-container188">
          <div className="main-content-container189">
            <div className="main-content-container190">
              <div className="main-content-container191">
                <img
                  alt="image"
                  src="/logo_lila_cut-400w.png"
                  className="main-content-image19"
                />
              </div>
            </div>
            <div className="main-content-container192">
              <span className="main-content-text155">Custom Quote</span>
              <span className="main-content-text156">
                Lorem hatu redi gandu
              </span>
            </div>
          </div>
          <div className="main-content-container193">
            <div className="main-content-container194">
              <div className="main-content-container195">
                <div className="main-content-container196">
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
                </div>
                <span className="main-content-text157">
                  {props.text67 ?? (
                    <Fragment>
                      <span className="main-content-text299">
                        Tailored lead generation
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="main-content-container197">
                <div className="main-content-container198">
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
                </div>
                <span className="main-content-text158">
                  {props.text68 ?? (
                    <Fragment>
                      <span className="main-content-text257">
                        Positive ROI leads
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="main-content-container199">
                <div className="main-content-container200">
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
                </div>
                <span className="main-content-text159">
                  {props.text69 ?? (
                    <Fragment>
                      <span className="main-content-text289">
                        Dedicated account manager
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="main-content-container201">
              <div className="main-content-container202">
                <div className="main-content-container203">
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
                </div>
                <span className="main-content-text160">
                  {props.text70 ?? (
                    <Fragment>
                      <span className="main-content-text292">
                        Guaranteed leads
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="main-content-container204">
                <div className="main-content-container205">
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
                </div>
                <span className="main-content-text161">
                  {props.text71 ?? (
                    <Fragment>
                      <span className="main-content-text286">
                        No minimum contract
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="hoeItWork" className="main-content-container206">
        <span className="main-content-text162">
          <span className="main-content-text163">
            Getting
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="main-content-text164">More Leads</span>
          <br className="main-content-text165"></br>
          <span className="main-content-text166">
            Has Never Been This
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="main-content-text167">Easy</span>
        </span>
        <div className="main-content-container207">
          <div className="main-content-container208">
            <div className="main-content-container209">
              <div className="main-content-container210">
                <div className="main-content-container211">
                  <span>
                    {props.text76 ?? (
                      <Fragment>
                        <span className="main-content-text275">1</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <span className="main-content-text169">Book A Call</span>
              <span className="main-content-text170">
                We will get you know your company and answer some questions to
                better understand your needs
              </span>
            </div>
            <div className="main-content-container212">
              <div className="main-content-container213">
                <div className="main-content-container214">
                  <span>
                    {props.text77 ?? (
                      <Fragment>
                        <span className="main-content-text269">2</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <span className="main-content-text172">Offer</span>
              <span className="main-content-text173">
                We will send you an offer which fulfills your needs so that your
                happiness can be guaranteed
              </span>
            </div>
          </div>
          <div className="main-content-container215">
            <div className="main-content-container216">
              <div className="main-content-container217">
                <div className="main-content-container218">
                  <span>
                    {props.text78 ?? (
                      <Fragment>
                        <span className="main-content-text295">3</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <span className="main-content-text175">Onboarding</span>
              <span className="main-content-text176">
                We will prepare everything on our side and setup the system so
                that we can send new leads to your systems
              </span>
            </div>
            <div className="main-content-container219">
              <div className="main-content-container220">
                <div className="main-content-container221">
                  <span>
                    {props.text79 ?? (
                      <Fragment>
                        <span className="main-content-text297">4</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <span className="main-content-text178">Done</span>
              <span className="main-content-text179">
                You are now ready to get more leads on a constant basis to grow
                your business faster
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content-container222">
        <div className="main-content-container223">
          <img
            alt="image"
            src="/external/logo_txt_w-200h-500h.png"
            className="main-content-image20"
          />
        </div>
        <div className="main-content-container224">
          <span className="main-content-text180">
            <span className="main-content-text181">Sing up for</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="main-content-text183">Newslatter</span>
          </span>
          {newslatter === false && (
            <span className="main-content-text184">
              <span className="main-content-text185">
                You&apos;ll be informed about updates, special offers and
                planned
              </span>
              <br className="main-content-text186"></br>
              <span className="main-content-text187">
                changes to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="main-content-text188">Traffls</span>
              <span className="main-content-text189">!</span>
            </span>
          )}
        </div>
        {newslatter === false && (
          <div className="main-content-container225">
            <input
              type="text"
              placeholder={props.textinputPlaceholder}
              className="main-content-textinput2"
            />
            <a href="#howItWork" className="main-content-link23">
              <div
                onClick={() => setNewslatter(true)}
                className="main-content-container226"
              >
                <span>Sing up</span>
                <div className="main-content-container227">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="main-content-icon36"
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
        )}
        {newslatter === true && (
          <div className="main-content-container228">
            <span className="main-content-text191">
              {props.text ?? (
                <Fragment>
                  <span className="main-content-text270">
                    <span className="main-content-text271">
                      Thank you for subscribing!
                    </span>
                    <br></br>
                    <span>
                      You are now part of our exclusive newsletter. Look forward
                      to regular updates, exciting content, and exclusive offers
                      straight to your inbox.
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        )}
      </div>
      <div className="main-content-container229">
        <div className="main-content-container230">
          <span className="main-content-text192">
            <span className="mainTitle main-content-text193">
              Frequently Asked
            </span>
            <span className="mainTitle">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="main-content-text195">Questions</span>
          </span>
          <AskedQuestionsNew
            text1={
              <Fragment>
                <span className="main-content-text196">
                  Does the setup cost anything?
                </span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="main-content-text197">
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
                <span className="main-content-text198">
                  Is there a monthly fee?
                </span>
              </Fragment>
            }
            text13={
              <Fragment>
                <span className="main-content-text199">+</span>
              </Fragment>
            }
            text14={
              <Fragment>
                <span className="main-content-text200">
                  Does the setup cost anything?
                </span>
              </Fragment>
            }
            text82={
              <Fragment>
                <span className="main-content-text201">
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
                <span className="main-content-text202">+</span>
              </Fragment>
            }
            text121={
              <Fragment>
                <span className="main-content-text203">
                  Is there a minimum contract time?
                </span>
              </Fragment>
            }
            text122={
              <Fragment>
                <span className="main-content-text204">
                  Is there a monthly fee?
                </span>
              </Fragment>
            }
            text821={
              <Fragment>
                <span className="main-content-text205">
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
                <span className="main-content-text206">+</span>
              </Fragment>
            }
            text1211={
              <Fragment>
                <span className="main-content-text207">
                  How do you determine the price for a lead?
                </span>
              </Fragment>
            }
            text1212={
              <Fragment>
                <span className="main-content-text208">
                  Is there a minimum contract time?
                </span>
              </Fragment>
            }
            text8211={
              <Fragment>
                <span className="main-content-text209">
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
                <span className="main-content-text210">+</span>
              </Fragment>
            }
            text12111={
              <Fragment>
                <span className="main-content-text211">
                  How do you determine the price for a lead?
                </span>
              </Fragment>
            }
          ></AskedQuestionsNew>
        </div>
        <div className="main-content-container231">
          <div className="main-content-container232">
            <span className="main-content-text212">
              Do you have more questions?
            </span>
            <span className="main-content-text213">
              If you have any further questions or need additional information,
              feel free to reach out to us! We’re here to help and would love to
              assist you in any way we can. Don’t hesitate to contact us – we’re
              just a message away!
            </span>
            <a href="#call" className="main-content-link24">
              <div className="main-content-container233 btn-1">
                <span>Book a Call</span>
                <div className="main-content-container234">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="main-content-icon38"
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
      <div id="Contact" className="main-content-container235">
        <div className="main-content-container236">
          <span className="main-content-text215">
            <span>
              Start Your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="main-content-text217">Lead Engine</span>
          </span>
          <span className="main-content-text218">
            Our goal is to help companies solve the growth problem by providing
            continuos leads they can convert into longterm customers.
          </span>
        </div>
        <div className="main-content-container237">
          <div className="main-content-container238">
            <div className="main-content-container239">
              <div className="main-content-container240">
                <span>
                  {props.text722 ?? (
                    <Fragment>
                      <span className="main-content-text281">First name*</span>
                    </Fragment>
                  )}
                </span>
                <div className="main-content-container241">
                  <input
                    type="text"
                    placeholder={props.textinputPlaceholder22}
                    className="main-content-textinput3"
                  />
                </div>
              </div>
              <div className="main-content-container242">
                <span>
                  {props.text732 ?? (
                    <Fragment>
                      <span className="main-content-text294">Last name*</span>
                    </Fragment>
                  )}
                </span>
                <div className="main-content-container243">
                  <input
                    type="text"
                    placeholder={props.textinputPlaceholder32}
                    className="main-content-textinput4"
                  />
                </div>
              </div>
            </div>
            <div className="main-content-container244">
              <div className="main-content-container245">
                <span>
                  {props.text742 ?? (
                    <Fragment>
                      <span className="main-content-text288">Email*</span>
                    </Fragment>
                  )}
                </span>
                <div className="main-content-container246">
                  <input
                    type="text"
                    placeholder={props.textinputPlaceholder42}
                    className="main-content-textinput5"
                  />
                </div>
              </div>
              <div className="main-content-container247">
                <span>
                  {props.text752 ?? (
                    <Fragment>
                      <span className="main-content-text296">
                        Phone (Optional)
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="main-content-container248">
                  <input
                    type="text"
                    placeholder={props.textinputPlaceholder52}
                    className="main-content-textinput6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="main-content-container249">
            <span className="main-content-text223">Message*</span>
            <div className="main-content-container250">
              <textarea
                placeholder={props.textareaPlaceholder2}
                className="main-content-textarea textarea"
              ></textarea>
            </div>
          </div>
        </div>
        <a href="#cld" className="main-content-link25">
          <div className="main-content-container251 btn-1">
            <span>Submit</span>
          </div>
        </a>
      </div>
      <div id="call" className="main-content-container252">
        <div className="main-content-container253">
          <span className="main-content-text225">
            <span>
              Start Your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="main-content-text227">Lead Engine</span>
          </span>
          <span className="main-content-text228">
            Our goal is to help companies solve the growth problem by providing
            continuos leads they can convert into longterm customers.
          </span>
        </div>
        <div className="main-content-container254">
          <div className="main-content-container255">
            <div className="main-content-container256">
              <React.Fragment>
                <React.Fragment>
                  {/* Calendly inline widget begin */}
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/traffls/30min"
                    style={{
                      width: '100%',
                      height: '850px',
                      overflow: 'hidden',
                    }}
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
      </div>
      <div className="main-content-container257">
        <div className="main-content-container258">
          <div className="main-content-container259">
            <div className="main-content-container260">
              <div className="main-content-container261">
                <img
                  alt="image"
                  src="/external/logo_txt_w-200h-500h.png"
                  className="main-content-image21"
                />
              </div>
              <span className="main-content-text229">
                Elevate your sales game by thinking outside the box
              </span>
            </div>
            <div className="main-content-container262">
              <a
                href="https://www.linkedin.com/company/traffls/"
                target="_blank"
                rel="noreferrer noopener"
                className="main-content-link26"
              >
                <div className="main-content-container263">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="main-content-icon40"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://www.instagram.com/traffls_com/"
                target="_blank"
                rel="noreferrer noopener"
                className="main-content-link27"
              >
                <div className="main-content-container264">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="main-content-icon42"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="main-content-container265">
          <div className="main-content-container266">
            <span>EXPLORE</span>
            <div className="main-content-container267">
              <a href="#company" className="main-content-link28">
                Company
              </a>
            </div>
            <div className="main-content-container268">
              <a href="#price" className="main-content-link29">
                {props.text55 ?? (
                  <Fragment>
                    <span className="main-content-text291 text">Pricing</span>
                  </Fragment>
                )}
              </a>
            </div>
            <div className="main-content-container269">
              <a href="#hoeItWork" className="main-content-link30">
                {props.text56 ?? (
                  <Fragment>
                    <span className="main-content-text274 text">
                      How it Work
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
            <div className="main-content-container270">
              <a href="#Contact" className="main-content-link31">
                {props.text57 ?? (
                  <Fragment>
                    <span className="main-content-text256 text">
                      Contact us
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div className="main-content-container271">
            <span>SUPPORT</span>
            <Link to="/privacy-policy" className="main-content-navlink1">
              <div className="main-content-container272">
                <span className="main-content-text232">
                  {props.text58 ?? (
                    <Fragment>
                      <span className="main-content-text280 text">
                        Privacy Policy
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </Link>
            <Link to="/imprint" className="main-content-navlink2">
              <div className="main-content-container273">
                <span className="main-content-text233">
                  {props.text59 ?? (
                    <Fragment>
                      <span className="main-content-text290 text">Imprint</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </Link>
          </div>
          <div className="main-content-container274">
            <span>Contact info</span>
            <a
              href="mailto:info@up2data.io?subject="
              className="main-content-link32"
            >
              <div className="main-content-container275">
                <span>
                  {props.text60 ?? (
                    <Fragment>
                      <span className="main-content-text268 text">
                        info@traffls.com
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </a>
            <span>
              <span>Up2Data GmbH</span>
              <br></br>
              <span>Prinz-Ludwig-Straße 4</span>
              <br></br>
              <span>80333 München</span>
            </span>
          </div>
        </div>
      </div>
      <div className="main-content-container276">
        <span className="main-content-text242">Traffls </span>
        <div className="main-content-container277">
          <div className="main-content-container278">
            <span>Privacy Policy</span>
            <span>Imprint</span>
          </div>
          <div className="main-content-container279">
            <span className="main-content-text245 titel-2">Contact info</span>
            <div className="main-content-container280">
              <a
                href="mailto:info@up2data.io?subject="
                className="main-content-link33"
              >
                <div className="main-content-container281">
                  <span className="text">info@traffls.com</span>
                </div>
              </a>
              <span className="text main-content-text247">
                <span>Up2Data GmbH</span>
                <br></br>
                <span>Prinz-Ludwig-Straße 4</span>
                <br></br>
                <span>80333 München</span>
              </span>
            </div>
          </div>
          <div className="main-content-container282">
            <span className="main-content-text253">
              Elevate your sales game by thinking outside the box
            </span>
            <div className="main-content-container283">
              <a
                href="https://www.linkedin.com/company/traffls/"
                target="_blank"
                rel="noreferrer noopener"
                className="main-content-link34"
              >
                <div className="main-content-container284">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="main-content-icon44"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://www.instagram.com/traffls_com/"
                target="_blank"
                rel="noreferrer noopener"
                className="main-content-link35"
              >
                <div className="main-content-container285">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="main-content-icon46"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MainContent.defaultProps = {
  text81: undefined,
  text63: undefined,
  textinputPlaceholder42: 'john.doe@gmail.com',
  text57: undefined,
  text68: undefined,
  text61: undefined,
  text60: undefined,
  text77: undefined,
  text: undefined,
  textinputPlaceholder1: 'john.doe@gmail.com',
  text56: undefined,
  text76: undefined,
  text1: undefined,
  text58: undefined,
  text722: undefined,
  text64: undefined,
  textinputPlaceholder52: '+1 23 456 789',
  text71: undefined,
  text80: undefined,
  text742: undefined,
  text69: undefined,
  text59: undefined,
  text55: undefined,
  text70: undefined,
  text82: undefined,
  text732: undefined,
  text78: undefined,
  text752: undefined,
  textinputPlaceholder22: 'John',
  text79: undefined,
  textinputPlaceholder32: 'Doe',
  textinputPlaceholder: 'john.doe@gmail.com',
  text65: undefined,
  text67: undefined,
  text66: undefined,
  textareaPlaceholder2: 'Please write your message here...',
}

MainContent.propTypes = {
  text81: PropTypes.element,
  text63: PropTypes.element,
  textinputPlaceholder42: PropTypes.string,
  text57: PropTypes.element,
  text68: PropTypes.element,
  text61: PropTypes.element,
  text60: PropTypes.element,
  text77: PropTypes.element,
  text: PropTypes.element,
  textinputPlaceholder1: PropTypes.string,
  text56: PropTypes.element,
  text76: PropTypes.element,
  text1: PropTypes.element,
  text58: PropTypes.element,
  text722: PropTypes.element,
  text64: PropTypes.element,
  textinputPlaceholder52: PropTypes.string,
  text71: PropTypes.element,
  text80: PropTypes.element,
  text742: PropTypes.element,
  text69: PropTypes.element,
  text59: PropTypes.element,
  text55: PropTypes.element,
  text70: PropTypes.element,
  text82: PropTypes.element,
  text732: PropTypes.element,
  text78: PropTypes.element,
  text752: PropTypes.element,
  textinputPlaceholder22: PropTypes.string,
  text79: PropTypes.element,
  textinputPlaceholder32: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text65: PropTypes.element,
  text67: PropTypes.element,
  text66: PropTypes.element,
  textareaPlaceholder2: PropTypes.string,
}

export default MainContent
