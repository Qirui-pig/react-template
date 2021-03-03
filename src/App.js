import React, { memo, useState } from 'react'

import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import './assets/css/index.less'
import routes from './router'
import store from './store'
import AppHeader from './components/content/header'
import HMenu from './components/content/menu'
import { MainWrapper } from './style'
import LoginPage from './pages/login'

export default memo(function App () {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  const change = (value) => {
    setIsCollapsed(value)
  }

  const login = (value) =>{
    setIsLogin(value)
  }
 
  return (
    <Provider store={store}>
      {
        isLogin ? (
          <div>
            <AppHeader login={login}/>
            <HMenu change={change} />
            <MainWrapper isOpen={!isCollapsed}>
              <HashRouter className='content'>
                {renderRoutes(routes)}
              </HashRouter>
            </MainWrapper>
          </div>
        ) : <LoginPage login={login}/>
      }
    </Provider>
  )
})
