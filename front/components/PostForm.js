import React , {useCallback, useState,useEffect}from 'react';
import { Input , Form, Button, Card, Icon, Avatar} from 'antd';
import {ADD_POST_REQUEST} from '../reducers/post'
import{useSelector, useDispatch} from 'react-redux';
const PostForm = () =>
{
    const dispatch = useDispatch();
    const {imagePath, isAddingPost,postAdded} = useSelector(state=>state.post);
    const [text,setText] = useState('');
    useEffect(() => {
        setText('');
    }, [postAdded === true])
    const onSubmitForm = useCallback(
        (e) => {
            e.preventDefault();
            dispatch({
                type: ADD_POST_REQUEST,
                data:
                {
                    text,
                },
            });
            
        },
        [],
    )
    const onChangeText = useCallback(
        (e) => {
            setText(e.target.value);
        },
        [],
    )
    return(
           <Form style={{marginBottom: 20}}encType="multipart/form-data" onSubmit={onSubmitForm} >
                <Input.TextArea maxLength={140} style={{marginTop: 20}} onChange={onChangeText} placeholder="어떤 신기한 일이 있었나요?" />
                <div>
                    <input type="file" multiple hidden />
                    <Button>이미지 업로드</Button>
                    <Button type="primary" style={{float: 'right'}} isLoading={isAddingPost} htmlType="submit">짹짹</Button>
                
                </div>
                <div>
                    {imagePath.map((v,i)=>
                    {
                        
                            <div key={v} style={{display: 'inline-block'}}>
                                <img src={'https://localhost:3065/' + v} style={{width: '200px'}} alt={v}/>
                                <div>
                                    <Button>제거</Button>
                                </div>
                            </div>
                   
                    })}
                    
                </div>
                </Form>
                );  
            
            }


export default PostForm;