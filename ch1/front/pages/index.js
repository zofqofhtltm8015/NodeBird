import React,{useEffect} from 'react';
import { Input , Form, Button, Card, Icon, Avatar} from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch,useSelector } from 'react-redux';
import {LOG_IN,LOG_OUT,loginAction,logoutAction} from '../reducers/user'


const Home = () =>
{
    const dispatch = useDispatch();
  useEffect(() => {
      dispatch({
          type: 'LOG_IN_SUCCESS'
      })
     
  },[]);
    const {isLoggedIn, user} = useSelector(state=>state.user)
    const {mainPosts} = useSelector(state=>state.post)
    console.log(user);

    return(
        <div>
          {isLoggedIn ? <div>로그인 했습니다 :  {user.nickname} </div>: <div>로그아웃했습니다.</div>}
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