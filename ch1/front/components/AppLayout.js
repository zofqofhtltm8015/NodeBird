
import React,{ useState } from 'react';
import {Form, Menu,Input, Button, Col,Row,Card,Avatar}  from 'antd';
import Link from 'next/link';
import LoginForm from './LoginForm';
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
            <Row>
    	<Col xs={24} md={6} >
         
        <Card

            actions={[
                <div key="twit">짹짹<br />{dummy.Post.length}</div>,
                <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
                <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
                

            ]}
            >
            <Card.Meta
                avatar={<Avatar src="https://images.alphacoders.com/849/849018.png">{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}
            />
         </Card>
         
                <LoginForm></LoginForm>

        </Col>
		<Col xs={24} md={12} >   {children}</Col>
    	<Col xs={24} md={6} >세번째</Col>

</Row>
         
        </div>
    )
};

export default AppLayout;