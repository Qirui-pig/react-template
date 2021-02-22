import React, { memo } from 'react'

import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import './assets/css/index.less'
import routes from './router'
import store from './store'
import AppHeader from './components/content/header'


export default memo(function App () {
  return (
    <Provider store={store}>
      <AppHeader />
      <HashRouter className='App'>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  )
})
