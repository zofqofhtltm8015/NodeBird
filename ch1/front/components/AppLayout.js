
import React,{ useState } from 'react';
import {Form, Menu,Input, Button, Col,Row,Card,Avatar}  from 'antd';
import Link from 'next/link';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
const dummy ={
    nickname: '최종근',
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedin: false
};


const AppLayout = ({children}) =>
{
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                  <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
               </Menu.Item>
            </Menu>
            <Row gutter={10}>
    	<Col xs={24} md={6} >
         {dummy.isLoggedin
         ?
                <UserProfile />
         :
         
                <LoginForm />}

        </Col>
		<Col xs={24} md={12} >   {children}</Col>
    	<Col xs={24} md={6} ><Link href="https://github.com/zofqofhtltlm8015"><a>For GiGESON</a></Link></Col>

</Row>
         
        </div>
    )
};

export default AppLayout;