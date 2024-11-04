import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import HomeV1 from './views/home-v1'
import Imprint from './views/imprint'
import PrivacyPolicy from './views/privacy-policy'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={HomeV1} exact path="/home-v1" />
        <Route component={Imprint} exact path="/imprint" />
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
