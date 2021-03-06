import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, Breadcrumb, Affix, Skeleton } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import axios from "axios";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../static/styles/pages/detailed.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Tocify from "./../components/tocify.tsx";
import servicePath from "./../config/apiUrl";

const Detailed = (props) => {
  const [loading, setLoading] = useState(true);
  const renderer = new marked.Renderer();
  const tocify = new Tocify();
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  let html = marked(props.article_content);
  return (
    <div>
      <Head>
        <title>沅沅威武</title>
      </Head>
      <Header />
      <div className="main">
        <div className="backimg"></div>
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={18}>
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <a href="/">首页</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>文章列表</Breadcrumb.Item>
                  <Breadcrumb.Item> JS高程读书笔记</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div>
                <div className="list-icon center">
                  <span>
                    <CalendarOutlined /> 2020-06-30
                  </span>
                  <span>
                    <FolderOutlined /> 视频教程
                  </span>
                  <span>
                    <FireOutlined /> 1人
                  </span>
                </div>

                <div
                  className="detailed-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </div>
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={6}>
            <Author />
            {/* <Advert /> */}
            <Affix offsetTop={5}>
              <div
                className="detailed-nav comm-box"
                style={{ margin: ".6rem 0 0 .6rem" }}
              >
                <div className="nav-title">文章目录</div>
                <div className="toc-list">{tocify && tocify.render()}</div>
              </div>
            </Affix>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

Detailed.getInitialProps = async (context) => {
  try {
    let id = context.query.id;
    const promise = new Promise((resolve) => {
      axios(servicePath.getArticleById + id).then((res) => {
        console.log(res.data.data[0]);
        resolve(res.data.data[0]);
      });
    });

    return await promise;
  } catch (error) {
    console.log(error);
  }
};

export default Detailed;
