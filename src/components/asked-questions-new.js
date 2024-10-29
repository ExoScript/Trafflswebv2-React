import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './asked-questions-new.css'

const AskedQuestionsNew = (props) => {
  const [g2, setG2] = useState(false)
  const [g4, setG4] = useState(false)
  const [g3, setG3] = useState(false)
  const [g1, setG1] = useState(false)
  return (
    <div className="asked-questions-new-asked-questions-new">
      {g1 === true && (
        <div
          onClick={() => setG1(false)}
          className="asked-questions-new-container10"
        >
          <div className="asked-questions-new-container11">
            <div className="asked-questions-new-container12"></div>
            <span>
              {props.text1 ?? (
                <Fragment>
                  <span className="asked-questions-new-text32">
                    Does the setup cost anything?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="asked-questions-new-container13">
            <span>
              {props.text8 ?? (
                <Fragment>
                  <span className="asked-questions-new-text41">
                    No, there is no setup fee. We believe in the long-term value
                    of our service, so we focus on delivering results without
                    any upfront costs. This allows you to start without any
                    financial barriers, trusting that our service will prove its
                    value over time.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      )}
      {g1 === false && (
        <div
          onClick={() => {
            setG4(false)
            setG1(true)
            setG2(false)
            setG3(false)
          }}
          className="asked-questions-new-container14"
        >
          <div className="asked-questions-new-container15">
            <span>
              {props.text13 ?? (
                <Fragment>
                  <span className="asked-questions-new-text39">+</span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text14 ?? (
                <Fragment>
                  <span className="asked-questions-new-text33">
                    Does the setup cost anything?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      )}
      {g2 === true && (
        <div
          onClick={() => setG2(false)}
          className="asked-questions-new-container16"
        >
          <div className="asked-questions-new-container17">
            <div className="asked-questions-new-container18"></div>
            <span>
              {props.text12 ?? (
                <Fragment>
                  <span className="asked-questions-new-text38">
                    Is there a monthly fee?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="asked-questions-new-container19">
            <span>
              {props.text82 ?? (
                <Fragment>
                  <span className="asked-questions-new-text28">
                    No, there is no setup fee. We believe in the long-term value
                    of our service, so we focus on delivering results without
                    any upfront costs. This allows you to start without any
                    financial barriers, trusting that our service will prove its
                    value over time.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      )}
      {g2 === false && (
        <div
          onClick={() => {
            setG1(false)
            setG4(false)
            setG2(true)
            setG3(false)
          }}
          className="asked-questions-new-container20"
        >
          <div className="asked-questions-new-container21">
            <span>
              {props.text102 ?? (
                <Fragment>
                  <span className="asked-questions-new-text31">+</span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text122 ?? (
                <Fragment>
                  <span className="asked-questions-new-text34">
                    Is there a monthly fee?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      )}
      {g3 === true && (
        <div
          onClick={() => setG3(false)}
          className="asked-questions-new-container22"
        >
          <div className="asked-questions-new-container23">
            <div className="asked-questions-new-container24"></div>
            <span>
              {props.text121 ?? (
                <Fragment>
                  <span className="asked-questions-new-text37">
                    Is there a minimum contract time?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="asked-questions-new-container25">
            <span>
              {props.text821 ?? (
                <Fragment>
                  <span className="asked-questions-new-text40">
                    No, there is no setup fee. We believe in the long-term value
                    of our service, so we focus on delivering results without
                    any upfront costs. This allows you to start without any
                    financial barriers, trusting that our service will prove its
                    value over time.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      )}
      {g3 === false && (
        <div
          onClick={() => {
            setG1(false)
            setG2(false)
            setG4(false)
            setG3(true)
          }}
          className="asked-questions-new-container26"
        >
          <div className="asked-questions-new-container27">
            <span>
              {props.text1012 ?? (
                <Fragment>
                  <span className="asked-questions-new-text29">+</span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text1212 ?? (
                <Fragment>
                  <span className="asked-questions-new-text35">
                    Is there a minimum contract time?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      )}
      {g4 === true && (
        <div
          onClick={() => setG4(false)}
          className="asked-questions-new-container28"
        >
          <div className="asked-questions-new-container29">
            <div className="asked-questions-new-container30"></div>
            <span>
              {props.text1211 ?? (
                <Fragment>
                  <span className="asked-questions-new-text27">
                    How do you determine the price for a lead?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="asked-questions-new-container31">
            <span>
              {props.text8211 ?? (
                <Fragment>
                  <span className="asked-questions-new-text36">
                    No, there is no setup fee. We believe in the long-term value
                    of our service, so we focus on delivering results without
                    any upfront costs. This allows you to start without any
                    financial barriers, trusting that our service will prove its
                    value over time.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      )}
      {g4 === false && (
        <div
          onClick={() => {
            setG2(false)
            setG3(false)
            setG1(false)
            setG4(true)
          }}
          className="asked-questions-new-container32"
        >
          <div className="asked-questions-new-container33">
            <span>
              {props.text10111 ?? (
                <Fragment>
                  <span className="asked-questions-new-text30">+</span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text12111 ?? (
                <Fragment>
                  <span className="asked-questions-new-text26">
                    How do you determine the price for a lead?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

AskedQuestionsNew.defaultProps = {
  text12111: undefined,
  text1211: undefined,
  text82: undefined,
  text1012: undefined,
  text10111: undefined,
  text102: undefined,
  text1: undefined,
  text14: undefined,
  text122: undefined,
  text1212: undefined,
  text8211: undefined,
  text121: undefined,
  text12: undefined,
  text13: undefined,
  text821: undefined,
  text8: undefined,
}

AskedQuestionsNew.propTypes = {
  text12111: PropTypes.element,
  text1211: PropTypes.element,
  text82: PropTypes.element,
  text1012: PropTypes.element,
  text10111: PropTypes.element,
  text102: PropTypes.element,
  text1: PropTypes.element,
  text14: PropTypes.element,
  text122: PropTypes.element,
  text1212: PropTypes.element,
  text8211: PropTypes.element,
  text121: PropTypes.element,
  text12: PropTypes.element,
  text13: PropTypes.element,
  text821: PropTypes.element,
  text8: PropTypes.element,
}

export default AskedQuestionsNew
