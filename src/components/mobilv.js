import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import AskedQuestions from './asked-questions'
import './mobilv.css'

const Mobilv = (props) => {
  const [impressum, setImpressum] = useState(false)
  const [menu, setMenu] = useState(false)
  return (
    <div className="mobilv-mobilv">
      <div className="mobilv-top-bar">
        <Link to="/home-v2" className="mobilv-navlink">
          <img
            alt="image"
            src="/logo_lila_cut-200w.png"
            className="mobilv-image1"
          />
        </Link>
        <span className="mobilv-text100">Traffls</span>
        <div onClick={() => setMenu(true)} className="mobilv-container10">
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
      {menu === true && (
        <div className="mobilv-menu1">
          <div className="mobilv-bar">
            <img
              alt="image"
              src="/logo_lila_cut-200w.png"
              className="mobilv-image2"
            />
            <span className="mobilv-text101">Menu</span>
            <div onClick={() => setMenu(false)} className="mobilv-container11">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="mobilv-icon14"
              >
                <path
                  d="m8 8l32 32M8 40L40 8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="mobilv-menu2">
            <div onClick={() => setMenu(false)} className="mobilv-container12">
              <span className="mobilv-text102">
                <span>Home</span>
                <br></br>
              </span>
            </div>
            <div onClick={() => setMenu(false)} className="mobilv-container13">
              <span className="mobilv-text105">About us</span>
            </div>
            <div className="mobilv-container14">
              <span className="mobilv-text106">Pricing</span>
            </div>
            <div className="mobilv-container15">
              <span className="mobilv-text107">How it Works</span>
            </div>
            <div className="mobilv-container16">
              <span className="mobilv-text108">Testimonials</span>
            </div>
            <div className="mobilv-container17">
              <span className="mobilv-text109">Contact us</span>
            </div>
          </div>
        </div>
      )}
      <div className="mobilv-content">
        <div id="home" className="mobilv-container18">
          <span className="mobilv-text110">
            <span className="mobilv-text111">Increase</span>
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
            <span className="mobilv-text115">30%</span>
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
            <span className="mobilv-text119">3 months</span>
          </span>
          <span className="mobilv-text120">
            We generate a constant flow of B2B leads for you with a predefined
            ROI and without upfront costs. Only pay for what you get
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <div className="mobilv-container19">
            <a href="#cld" className="mobilv-link1">
              <div className="mobilv-container20 btn-1">
                <span>Book a Call</span>
              </div>
            </a>
            <div className="mobilv-container21 btn-2">
              <span>Our Services</span>
            </div>
          </div>
        </div>
        <div className="mobilv-container22">
          <div className="mobilv-container23">
            <span className="mobilv-text123 title">
              <span className="mobilv-text124">B2B Leads</span>
              <span> without Risk</span>
            </span>
            <span className="mobilv-text126 txt">
              Trusted by leading SaaS Companies in Europe
            </span>
          </div>
          <div className="mobilv-container24"></div>
        </div>
        <div id="aboutUs" className="mobilv-container25">
          <span className="mobilv-text127">
            <span>
              Why Choose
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mobilv-text129">traffls?</span>
          </span>
          <div className="mobilv-container26">
            <span className="mobilv-text130">
              traffls is the only service that not only guarantees you leads but
              also guarantees a positive ROI on these leads. So you can work
              with us and only pay when the outcome really benefits you - no
              strings attached
            </span>
            <span className="mobilv-text131"> </span>
            <span className="mobilv-text132">
              Our service, processes, and know-how are crafted by years of B2B
              Sales experience and will help you to reach your next growth goal
              faster and with less risk
            </span>
          </div>
          <div className="btn-1">
            <span>Book a Call</span>
          </div>
        </div>
        <div className="mobilv-container28">
          <div className="mobilv-container29">
            <div className="mobilv-container30">
              <img
                alt="image"
                src="/user-engagement-1500h.png"
                className="mobilv-image3"
              />
            </div>
            <div className="mobilv-container31">
              <span className="mobilv-text134">Guaranteed Leads</span>
              <span className="mobilv-text135">
                If we do not deliver, there is no cost involved. But do not
                worry, we will deliver
              </span>
            </div>
          </div>
          <div className="mobilv-container32">
            <div className="mobilv-container33">
              <img
                alt="image"
                src="/growing-business-1500h.png"
                className="mobilv-image4"
              />
            </div>
            <div className="mobilv-container34">
              <span className="mobilv-text136">Guaranteed positive ROI</span>
              <span className="mobilv-text137">
                After getting to know your business we will establish a ROI
                positive case for you so that you can grow your business healthy
              </span>
            </div>
          </div>
          <div className="btn-1">
            <span>Book a Call</span>
          </div>
        </div>
        <div className="mobilv-container36">
          <div className="mobilv-container37">
            <span className="mobilv-text139 title">
              <span>
                Start Your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="mobilv-text141">Lead Engine</span>
            </span>
            <span className="mobilv-text142 txt">
              Our goal is to help companies solve the growth problem by
              providing continuos leads they can convert into longterm
              customers.
            </span>
          </div>
          <div className="mobilv-container38">
            <div className="mobilv-container39">
              <div className="mobilv-container40">
                <div className="mobilv-container41">
                  <img
                    alt="image"
                    src="/badge-200h.png"
                    className="mobilv-image5"
                  />
                </div>
                <span className="mobilv-text143">No Upfront Costs</span>
                <span className="mobilv-text144">
                  The onboarding, the system setup, and everything else is on
                  us. We want that you don&apos;t need to worry about anything
                  other than closing more leads
                </span>
              </div>
              <div className="mobilv-container42">
                <div className="mobilv-container43">
                  <img
                    alt="image"
                    src="/calendar-200h.png"
                    className="mobilv-image6"
                  />
                </div>
                <span className="mobilv-text145">No Monthly Fee</span>
                <span className="mobilv-text146">
                  There is also no monthly fee, as we do believe in performance.
                  It is on us to make you happy and you should not pay for
                  anything else
                </span>
              </div>
            </div>
            <div className="mobilv-container44">
              <div className="mobilv-container45">
                <div className="mobilv-container46">
                  <img
                    alt="image"
                    src="/paper-200h.png"
                    className="mobilv-image7"
                  />
                </div>
                <span className="mobilv-text147">No Minimum Contract</span>
                <span className="mobilv-text148">
                  So we also do not believe in lenghty contract durations. If
                  you have the feeling that you want to move on, you can do it
                  anytime. The question is if this will ever happen
                </span>
              </div>
              <div id="test" className="mobilv-container47">
                <div className="mobilv-container48">
                  <img
                    alt="image"
                    src="/collaboration-200h.png"
                    className="mobilv-image8"
                  />
                </div>
                <span className="mobilv-text149">Ongoing Support</span>
                <span className="mobilv-text150">
                  You will always have access to our team and your dedicated
                  account manager. The support channel is open 24/7. We will be
                  happy to make you happy
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mobilv-container49">
          <span className="mobilv-text151">
            <span className="mobilv-text152">Getting More</span>
            <span>
              {' '}
              Leads Has Never Been This
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mobilv-text154">Easy</span>
          </span>
          <div className="mobilv-container50">
            <div className="mobilv-container51">
              <div className="mobilv-container52">
                <div className="mobilv-container53">
                  <div className="mobilv-container54">
                    <span>1</span>
                  </div>
                </div>
                <div className="mobilv-container55">
                  <span className="mobilv-text156">Book A Call</span>
                  <span className="mobilv-text157">
                    We will get you know your company and answer some questions
                    to better understand your needs
                  </span>
                </div>
              </div>
              <div className="mobilv-container56">
                <div className="mobilv-container57">
                  <div className="mobilv-container58">
                    <span>2</span>
                  </div>
                </div>
                <div className="mobilv-container59">
                  <span className="mobilv-text159">Offer</span>
                  <span className="mobilv-text160">
                    We will send you an offer which fulfills your needs so that
                    your happiness can be guaranteed
                  </span>
                </div>
              </div>
            </div>
            <div className="mobilv-container60">
              <div className="mobilv-container61">
                <div className="mobilv-container62">
                  <div className="mobilv-container63">
                    <span>3</span>
                  </div>
                </div>
                <div className="mobilv-container64">
                  <span className="mobilv-text162">Onboarding</span>
                  <span className="mobilv-text163">
                    We will prepare everything on our side and setup the system
                    so that we can send new leads to your systems
                  </span>
                </div>
              </div>
              <div className="mobilv-container65">
                <div className="mobilv-container66">
                  <div className="mobilv-container67">
                    <span>4</span>
                  </div>
                </div>
                <div className="mobilv-container68">
                  <span className="mobilv-text165">Done</span>
                  <span className="mobilv-text166">
                    You are now ready to get more leads on a constant basis to
                    grow your business faster
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobilv-container69">
          <span className="mobilv-text167">
            <span className="mobilv-text168">Pricing</span>
            <span> that fits you</span>
          </span>
          <div className="mobilv-container70"></div>
        </div>
        <div className="mobilv-container71">
          <span className="mobilv-text170">
            <span>
              Frequently Asked
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mobilv-text172">Questions</span>
          </span>
          <AskedQuestions rootClassName="asked-questionsroot-class-name"></AskedQuestions>
          <div className="mobilv-container72">
            <span className="mobilv-text173">
              <span>
                Do you have more
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>questions?</span>
            </span>
            <span className="mobilv-text177">
              If you have any further questions or need additional information,
              feel free to reach out to us! We’re here to help and would love to
              assist you in any way we can. Don’t hesitate to contact us – we’re
              just a message away!
            </span>
            <div className="btn-1 mobilv-container73">
              <span>Book a Call</span>
            </div>
          </div>
        </div>
        <div className="mobilv-container74">
          <div className="mobilv-container75">
            <span className="mobilv-text179">
              <span>
                Book a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="mobilv-text181">Discovery Call</span>
            </span>
            <span className="mobilv-text182">
              Ready to take your lead generation to the next level? Schedule a
              discovery call with our experts to learn how traffls can help you
              achieve your goals.
            </span>
          </div>
          <div className="mobilv-container76">
            <div className="mobilv-container77">
              <div className="mobilv-container78">
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
        <div className="mobilv-container79">
          <span className="mobilv-text183">
            <span className="mobilv-text184">Contact</span>
            <span> Us</span>
          </span>
          <div className="mobilv-container80">
            <div className="mobilv-container81">
              <div className="mobilv-container82">
                <span>First name*</span>
                <div className="mobilv-container83">
                  <input
                    type="text"
                    placeholder="John"
                    className="mobilv-textinput1"
                  />
                </div>
              </div>
              <div className="mobilv-container84">
                <span>Last name*</span>
                <div className="mobilv-container85">
                  <input
                    type="text"
                    placeholder="Doe"
                    className="mobilv-textinput2"
                  />
                </div>
              </div>
            </div>
            <div className="mobilv-container86">
              <div className="mobilv-container87">
                <span>Email*</span>
                <div className="mobilv-container88">
                  <input
                    type="text"
                    placeholder="john.doe@gmail.com"
                    className="mobilv-textinput3"
                  />
                </div>
              </div>
              <div className="mobilv-container89">
                <span>Phone (Optional)</span>
                <div className="mobilv-container90">
                  <input
                    type="text"
                    placeholder="+1 23 456 789"
                    className="mobilv-textinput4"
                  />
                </div>
              </div>
            </div>
            <div className="mobilv-container91">
              <div className="mobilv-container92">
                <span>Message*</span>
                <div className="mobilv-container93">
                  <textarea
                    placeholder="Please write your message here..."
                    className="mobilv-textarea textarea"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="mobilv-container94 btn-1">
            <span>Submit</span>
          </div>
        </div>
        <div className="mobilv-container95">
          <span className="mobilv-text192">Traffls </span>
          <div className="mobilv-container96">
            <div className="mobilv-container97">
              <span>Privacy Policy</span>
              <span>Imprint</span>
            </div>
            <div className="mobilv-container98">
              <span className="mobilv-text195 titel-2">Contact info</span>
              <div className="mobilv-container99">
                <a
                  href="mailto:info@up2data.io?subject="
                  className="mobilv-link2"
                >
                  <div className="mobilv-container100">
                    <span className="text">info@traffls.com</span>
                  </div>
                </a>
                <span className="text mobilv-text197">
                  <span>Up2Data GmbH</span>
                  <br></br>
                  <span>Prinz-Ludwig-Straße 4</span>
                  <br></br>
                  <span>80333 München</span>
                </span>
              </div>
            </div>
            <div className="mobilv-container101">
              <span className="mobilv-text203">
                Elevate your sales game by thinking outside the box
              </span>
              <div className="mobilv-container102">
                <a
                  href="https://www.linkedin.com/company/traffls/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mobilv-link3"
                >
                  <div className="mobilv-container103">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="mobilv-icon16"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/traffls_com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mobilv-link4"
                >
                  <div className="mobilv-container104">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="mobilv-icon18"
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
    </div>
  )
}

export default Mobilv
