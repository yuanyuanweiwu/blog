import Head from 'next/head'
import React from 'react'
import { Button } from 'antd'
import '../static/styles/pages/common.css'
import Header from './../components/Header';
const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
  </div>
)

export default Home
