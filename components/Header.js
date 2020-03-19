import "../static/styles/components/header.css";
import { Row, Col, Menu } from "antd";
import { HomeOutlined, CommentOutlined, VideoCameraOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from "react";
import Router from 'next/router'
import servicePath from './../config/apiUrl';
import axios from 'axios'

const Header = () => {
  const [navArray, setNavArray] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then((res) => {

        return res.data.data
      })
      setNavArray(result)
    }
    fetchData()
  }, [])

  const handleClick = (e) => {
    if (e.key == 1) {
      Router.push('/index')
    } else  if (e.key == 2) {
      Router.push('/list')
    }else{
      Router.push('/life')
    }
  }
  return (
    <div className="header">
      <div className='header-center'>
        <Row type="flex" justify="space-between">
          <Col xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">沅沅威武</span>
            <span className="header-txt">简单而又枯燥的博客</span>
          </Col>
          <Col xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu mode="horizontal" onClick={handleClick}>
              <Menu.Item key={1}>
                <HomeOutlined />
                首页
            </Menu.Item>
              <Menu.Item key={2}>
                <VideoCameraOutlined />
                视频
            </Menu.Item>
              <Menu.Item key={3}>
                <CommentOutlined />
                生活
            </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default Header;
