import React,{useEffect} from 'react';
import { Input , Form, Button, Card, Icon, Avatar} from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch,useSelector } from 'react-redux';
import {LOG_IN,LOG_OUT,loginAction,logoutAction} from '../reducers/user'

const Home = () =>
{
   
    const {isLoggedIn, me} = useSelector(state=>state.user)
    const {mainPosts} = useSelector(state=>state.post)
    console.log(me);

    return(
        <div>
            {isLoggedIn&& <PostForm />}
                {mainPosts.map((c) =>
                {
                    return(
                          <PostCard key={c} post={c} />  
                    )
                })
            }
            

        </div>
    )}

export default Home;