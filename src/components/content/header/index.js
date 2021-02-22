import React, { memo, useState } from 'react'

import { Row, Col, Menu, Dropdown } from 'antd'
import { ReactSVG } from 'react-svg'

import { AppHeaderWrapper } from './style'
import logoSvg from '@/assets/svg/logo.svg'


export default memo(function AppHeader () {
  const [currentIndex, setCurrentIndex] = useState(0)

  const options = [{ title: '简介' }, { title: '业务' }, { title: '员工' }, { title: '企业责任' }, { title: '媒体' }]

  const menu = (
    <Menu>
      <Menu.Item>
        面向用户
      </Menu.Item>
      <Menu.Item>
        面向企业
      </Menu.Item>
      <Menu.Item>
        创新科技
      </Menu.Item>
    </Menu>
  );

  return (
    <AppHeaderWrapper>
      <div className="wrap">
        <Row className="header">
          <Col className="h-left" span={4}>
            <Row>
              <Col span={10}>
                <ReactSVG src={logoSvg} className="logo" />
              </Col>
              <Col className="title" span={14}>Title</Col>
            </Row>
          </Col>
          <Col className="h-right" offset={2} span={18}>
            <ul className="tab-bar">
              {
                options.map((item, index) => {
                  return (
                    <Dropdown overlay={menu} overlayClassName="drop" placement="bottomCenter" trigger={['hover']} arrow>
                      <li onClick={e => setCurrentIndex(index)} className={['tab-item ', index === currentIndex ? 'active' : ''].join('')} key={item.title}>
                        <div>{item.title}</div>
                        <i className="line" />
                      </li>
                    </Dropdown>
                  )
                })
              }
            </ul>
          </Col>
        </Row>
      </div>
    </AppHeaderWrapper>
  )
})
