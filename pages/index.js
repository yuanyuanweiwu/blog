import Head from 'next/head'
import React, { useState } from 'react'
import { CalendarFilled, FolderFilled, FireFilled } from '@ant-design/icons'
import { List, Row, Col } from 'antd'
import '../static/styles/pages/common.css'
import '../static/styles/pages/index.css'
import Header from './../components/Header';
import Author from './../components/Author';
import Advert from './../components/Advert'
import Footer from './../components/Footer';
import axios from 'axios'
import { resolveOnChange } from 'antd/lib/input/Input'
const Home = (list) => {
  const [myList, setMylist] = useState(list.data)

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={18} >
          <div>
            <List
              header={<div>最新日志</div>}
              itemLayout='vertical'
              dataSource={myList}
              renderItem={item => (
                <List.Item>
                  <div className='list-title'>
                    {item.title}
                  </div>
                  <div className='list-icon'>
                    <span><CalendarFilled />{item.addTime}</span>
                    <span><FolderFilled />{item.introduce}</span>
                    <span><FireFilled />{item.view_count}人</span>
                  </div>
                  <div className="list-context">{item.content}</div>
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={6} >
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Home.getInitialProps= async()=>{
  const promise=new Promise((resolve,reject)=>{
    axios('http://127.0.0.1:7001/default/getArticleList').then(res=>{
      resolve(res.data)
    })
  })
  return await promise
}
export default Home
