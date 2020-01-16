import React from 'react';
import { Input , Form, Button, Card, Icon, Avatar} from 'antd';

import{useSelector} from 'react-redux';
const PostForm = () =>
{
    const {imagePath} = useSelector(state=>state.post)
    return(
           <Form style={{marginBottom: 20}}encType="multipart/form-data">
                <Input.TextArea maxLength={140} style={{marginTop: 20}} placeholder="어떤 신기한 일이 있었나요?" />
                <div>
                    <input type="file" multiple hidden />
                    <Button>이미지 업로드</Button>
                    <Button type="primary" style={{float: 'right'}} htmlType="submit">짹짹</Button>
                
                </div>
                <div>
                    {imagePath.map((v,i)=>
                    {
                        
                            <div key={v} style={{display: 'inline-block'}}>
                                <img src={'https://localhost:3000/' + v} style={{width: '200px'}} alt={v}/>
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