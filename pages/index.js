import Head from "next/head";
import React, { useState } from "react";
import { CalendarFilled, FolderFilled, FireFilled } from "@ant-design/icons";
import { List, Row, Col, Button } from "antd";
import "../static/styles/pages/common.css";
import "../static/styles/pages/index.css";
import Header from "./../components/Header";
import Author from "./../components/Author";
import Advert from "./../components/Advert";
import Footer from "./../components/Footer";
import Link from "next/link";
import axios from "axios";
import { resolveOnChange } from "antd/lib/input/Input";
import servicePath from "./../config/apiUrl";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

const Home = (list) => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize: false,
    xhtml: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });
  const [myList, setMylist] = useState(list.data);

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
              <List
                header={<div>最新日志</div>}
                itemLayout="vertical"
                dataSource={myList}
                renderItem={(item) => (
                  <List.Item>
                    <div className="list-title">
                      <Link
                        href={{ pathname: "/detailed", query: { id: item.id } }}
                      >
                        <a>{item.title}</a>
                      </Link>
                    </div>
                    <div className="list-icon">
                      <span>
                        <CalendarFilled />
                        {item.addTime}
                      </span>
                      <span>
                        <FolderFilled />
                        {item.introduce}
                      </span>
                      <span>
                        <FireFilled />
                        {item.view_count}人
                      </span>
                    </div>
                    <div
                      className="list-context"
                      dangerouslySetInnerHTML={{
                        __html: marked(item.introduce),
                      }}
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={6}>
            <Author />
            {/* <Advert /> */}
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then((res) => {
      // axios('/default/getArticleList').then(res => {

      resolve(res.data);
    });
  }).catch((err) => {
    console.log(err.message);
  });

  return await promise;
};
export default Home;
