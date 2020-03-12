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
   <div className='author-introduction'>
    <div className="author-logo">沅沅威武</div>
    光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流
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
