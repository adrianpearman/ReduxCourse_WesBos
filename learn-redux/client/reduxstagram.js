// let's go!
import React from 'react' 
import { render } from 'react-dom' 
import { Router, Route, IndexRoute, browserHistory } from 'react-router' 
import { Provider } from 'react-redux' 
import store, { history } from './store'

// Webpack automatically bundles the styling and injects it into the application
import css from './styles/style.styl' 

import App from './components/App'
import Single from './components/Single'
import Photogrid from './components/Photogrid'

import Raven from 'raven-js' 
import { sentry_url } from './data/config'

Raven.config(sentry_url).install()

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Photogrid}></IndexRoute>
        <Route path='/view/:postId' component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))

