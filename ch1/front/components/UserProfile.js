import React, { useCallback } from 'react';
import {Form, Menu,Input, Button, Col,Row,Card,Avatar}  from 'antd';


import {useSelector,useDispatch} from 'react-redux';
import {logoutAction} from '../reducers/user';

const UserProfile = () =>
{
    const dispatch = useDispatch();
    const onLogout = useCallback(() =>
    {
        dispatch(logoutAction)
    },[]);


    const {user} = useSelector(state=>state.user);
return( 
            <Card

            actions={[
                <div key="twit">짹짹<br />{user.Post.length}</div>,
                <div key="following">팔로잉<br />{user.Followings.length}</div>,
                <div key="follower">팔로워<br />{user.Followers.length}</div>,
                

            ]}
            >
            <Card.Meta
                avatar={<Avatar src="https://images.alphacoders.com/849/849018.png">{user.nickname[0]}</Avatar>}
                title={user.nickname}
            />
            <Button onClick={onLogout}>로그아웃</Button>
            </Card>
);
}

export default UserProfile;