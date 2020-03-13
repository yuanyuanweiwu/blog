import "../static/styles/components/header.css";
import { Row, Col, Menu } from "antd";
import { HomeOutlined, CommentOutlined, VideoCameraOutlined } from '@ant-design/icons'
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className='header-center'>
        <Row type="flex" justify="space-between">
          <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">沅沅威武</span>
            <span className="header-txt">简单而又枯燥的博客</span>
          </Col>
          <Col xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu mode="horizontal">
              <Menu.Item key="home">
                <HomeOutlined />
                首页
            </Menu.Item>
              <Menu.Item key="video">
                <VideoCameraOutlined />
                视频
            </Menu.Item>
              <Menu.Item key="life">
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
