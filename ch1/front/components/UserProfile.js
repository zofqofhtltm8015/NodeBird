import React, { useCallback } from 'react';
import {Form, Menu,Input, Button, Col,Row,Card,Avatar}  from 'antd';


import {useSelector,useDispatch} from 'react-redux';
import {LOG_OUT_REQUEST} from '../reducers/user';

const UserProfile = () =>
{
    const dispatch = useDispatch();
    const onLogout = useCallback(() =>
    {
        dispatch(   
            {  
                type: LOG_OUT_REQUEST,
            })
        },[]);

    const {me} = useSelector(state=>state.user);
return( 
            <Card

            actions={[
                <div key="twit">짹짹<br />{me.Post.length}</div>,
                <div key="following">팔로잉<br />{me.Followings.length}</div>,
                <div key="follower">팔로워<br />{me.Followers.length}</div>,
                

            ]}
            >
            <Card.Meta
                avatar={<Avatar src="https://images.alphacoders.com/849/849018.png">{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogout}>로그아웃</Button>
            </Card>
);
}

export default UserProfile;