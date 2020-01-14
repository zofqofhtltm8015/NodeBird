import React from 'react';
import { Input , Form, Button, Card, Icon, Avatar} from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
const dummy = {
    isLoggedIn: true,
    imagePath: [],
    mainPosts: [{
        User:{
            id: 1,
            nickname: '제로초',
        },
        content: '첫 번째 게시글',
        img: 'https://wallpapercave.com/wp/wp2195776.jpg',

    }],
};

const Home = () =>
{
    return(
        <div>
            {dummy.isLoggedIn&& <PostForm />}
                {dummy.mainPosts.map((c) =>
                {
                    return(
                          <PostCard key={c} post={c} />  
                    )
                })
            }
            

        </div>
    )}

export default Home;