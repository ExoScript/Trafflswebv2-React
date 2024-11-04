import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Imprint from './views/imprint'
import HomeV2 from './views/home-v2'
import PrivacyPolicy from './views/privacy-policy'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Imprint} exact path="/imprint" />
        <Route component={HomeV2} exact path="/home-v2" />
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
