import React from 'react';

import {Card, Avatar} from 'antd';

const dummy ={
    nickname: '최종근',
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedin: false
};

const UserProfile = () =>
{


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
}

export default UserProfile;