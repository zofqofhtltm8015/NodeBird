import React from 'react';
import { Input , Form, Button, Card, Icon, Avatar} from 'antd';

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
const PostForm = () =>
{return(
           <Form style={{marginBottom: 20}}encType="multipart/form-data">
                <Input.TextArea maxLength={140} style={{marginTop: 20}} placeholder="어떤 신기한 일이 있었나요?" />
                <div>
                    <input type="file" multiple hidden />
                    <Button>이미지 업로드</Button>
                    <Button type="primary" style={{float: 'right'}} htmlType="submit">짹짹</Button>
                
                </div>
                <div>
                    {dummy.imagePath.map((v,i)=>
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