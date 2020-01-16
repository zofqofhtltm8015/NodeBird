
import React,{ useState } from 'react';
import {Form, Menu,Input, Button, Col,Row,Card,Avatar}  from 'antd';
import Link from 'next/link';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import {useSelector} from 'react-redux';

const AppLayout = ({children}) =>
{
    const {isLoggedIn} = useSelector(state=>state.user)
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
         {isLoggedIn
         ?
         <UserProfile />

         :
         <LoginForm />

                
                }

        </Col>
		<Col xs={24} md={12} >   {children}</Col>
    	<Col xs={24} md={6} ><Link href="//github.com/zofqofhtltlm8015"><a>For GiGESON</a></Link></Col>

</Row>
         
        </div>
    )
};

export default AppLayout;