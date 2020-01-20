import React, { useState ,useCallback,useEffect} from 'react';
import { Input , Form, Button, Card, Icon, Avatar, List,Comment } from 'antd';

import {useSelector, useDispatch} from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';



const PostCard = ({post}) =>
{
  const {me} = useSelector(state=>state.user)
  const {commentAdded} = useSelector(state=>state.post)

  const onSubmitComment = useCallback(
    (e) => {
      e.preventDefault();
      if(!me)
      {
        return    alert("로그인이 필요합니다.")
      }
      
        
      return dispatch({
        type:ADD_COMMENT_REQUEST,
        data:{
          postId: post.id,
        }
      });
      
    },[me&& me.id],
  
  )
  const onChangeComment = useCallback(
    (e) => {
      setCommentText(e.target.value);
    },
    [],
  )
  useEffect(()=>
  {
    setCommentText('');
  },[commentAdded==true])
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText,setCommentText] = useState('');
  const dispatch = useDispatch();

  const onToggleComment = useCallback(()=>
  {
    setCommentFormOpened(prev=>!prev);
  },[]);
    return(                      
      <div>
      <Card
        key={+post.createdAt}
        cover={post.img && <img alt="example" src={post.img} />}
        actions ={[
            <Icon type="retweet" key="retweet" />,
            <Icon type="heart" key="heart" />,
            <Icon type="message" key="message" onClick={onToggleComment} />,
            <Icon type="ellipsis" key="ellipsis" />,

        ]}
        extra={<Button>팔로우</Button>}
        >
        <Card.Meta avatar={<Avatar>{post.user.nickname[0]}</Avatar>}
        title={post.user.nickname}
        description={post.content}
        />
        </Card>
        {commentFormOpened && (
          <>
            <Form onSubmit={onSubmitComment}>
                <Form.Item>
                  <Input.TextArea rows={4} value={commentText} required onChange={onChangeComment} />
                </Form.Item>
                <Button type="primary" htmlType="submit" >삐약</Button>
            </Form>
              <List header = {`${post.Comments ? post.Comments.length : 0}  댓글`}
              itemLayout = "horizontal"
              dataSource = {post.Comments || []}
              renderItem={item=>(
                <li>
                  <Comment
                    author={item.user.nickname}
                    avatar={<Avatar>{item.user.nickname[0]}</Avatar>}
                    content={item.content}
                    />
                </li>
              )}
              />

              </>
        )}
      </div>
);
};




export default PostCard;