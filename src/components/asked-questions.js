import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './asked-questions.css'

const AskedQuestions = (props) => {
  const [q1, setQ1] = useState(false)
  const [q4, setQ4] = useState(false)
  const [q2, setQ2] = useState(false)
  const [q3, setQ3] = useState(false)
  return (
    <div className="asked-questions-container1">
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
          <span>
            {props.text ?? (
              <Fragment>
                <span className="asked-questions-text41">
                  Have questions or need more information? Fill out the contact
                  form
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            )}
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
            <span>
              {props.text1 ?? (
                <Fragment>
                  <span className="asked-questions-text33">
                    <span>
                      Have questions or need more information? Fill out the
                      contact form below, and we will get back to you shortly.
                    </span>
                    <br></br>
                    <span>
                      Have questions or need more information? Fill out the
                      contact form below, and we will get back to you shortly.
                    </span>
                    <br></br>
                    <span>
                      Have questions or need more information? Fill out the
                      contact form below, and we will get back to you shortly.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              )}
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
          <span>
            {props.text2 ?? (
              <Fragment>
                <span className="asked-questions-text40">
                  Have questions or need more information? Fill out the contact
                  form
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            )}
          </span>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path
              d="M17 15V5h-2v10H5v2h10v10h2V17h10v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        {q2 === true && (
          <div className="asked-questions-container5">
            <span>
              {props.text11 ?? (
                <Fragment>
                  <span className="asked-questions-text42">
                    <span>
                      Have questions or need more information? Fill out the
                      contact form below, and we will get back to you shortly.
                    </span>
                    <br></br>
                    <span>
                      Have questions or need more information? Fill out the
                      contact form below, and we will get back to you shortly.
                    </span>
                    <br></br>
                    <span>
                      Have questions or need more information? Fill out the
                      contact form below, and we will get back to you shortly.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              )}
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
          <span>
            {props.text22 ?? (
              <Fragment>
                <span className="asked-questions-text18">
                  Have questions or need more information? Fill out the contact
                  form
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            )}
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
            <span>
              {props.text112 ?? (
                <Fragment>
                  <span className="asked-questions-text26">
                    <span>
                      Have questions or need more information? Fill out the
                      contact form below, and we will get back to you shortly.
                    </span>
                    <br></br>
                    <span>
                      Have questions or need more information? Fill out the
                      contact form below, and we will get back to you shortly.
                    </span>
                    <br></br>
                    <span>
                      Have questions or need more information? Fill out the
                      contact form below, and we will get back to you shortly.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              )}
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
          <span>
            {props.text21 ?? (
              <Fragment>
                <span className="asked-questions-text49">
                  Have questions or need more information? Fill out the contact
                  form
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            )}
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
            <span>
              {props.text111 ?? (
                <Fragment>
                  <span className="asked-questions-text19">
                    <span>
                      Have questions or need more information? Fill out the
                      contact form below, and we will get back to you shortly.
                    </span>
                    <br></br>
                    <span>
                      Have questions or need more information? Fill out the
                      contact form below, and we will get back to you shortly.
                    </span>
                    <br></br>
                    <span>
                      Have questions or need more information? Fill out the
                      contact form below, and we will get back to you shortly.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

AskedQuestions.defaultProps = {
  text22: undefined,
  text111: undefined,
  text112: undefined,
  text1: undefined,
  text2: undefined,
  text: undefined,
  text11: undefined,
  text21: undefined,
}

AskedQuestions.propTypes = {
  text22: PropTypes.element,
  text111: PropTypes.element,
  text112: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text: PropTypes.element,
  text11: PropTypes.element,
  text21: PropTypes.element,
}

export default AskedQuestions
