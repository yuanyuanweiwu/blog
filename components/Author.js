import React from 'react';
import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import '../static//styles/components//Author.css'

const Author = () => {
 return (
  <div className='author-div comm-box'>
   <div>
    <Avatar size={100} src='../static/imgs/1.jpg' />
   </div>
   <div className='author-introduction' style={{textAlign:'center'}}>
    <div className="author-logo" >沅沅威武</div>
   无名小前端。专业切图狗
   <Divider>社交账号</Divider>
    <div className='social-connect'>
     <Avatar size={28} icon={<GithubOutlined />} className='account' />
     <Avatar size={28} icon={<QqOutlined />} className='account' />
     <Avatar size={28} icon={<WechatOutlined />} className='account' />
    </div>
   </div>
  </div>
 );
}

export default Author;
