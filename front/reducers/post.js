export const initalState ={
    
        isLoggedIn: true,
        imagePath: [], //미리보기 이미지 경로
        mainPosts: [{
            id: 1,  

            user:{
                id: 1,
                nickname: '제로초',
            },
            content: '첫 번째 게시글',
            img: 'https://wallpapercave.com/wp/wp2195776.jpg',
    Comments: [],

        }],
        addPostErrorReason: false,
        isAddingPost: false,
        postAdded : false,

        addCommentErrorReason: false,
        isAddingComment: false,
        CommentAdded : false,
    
};


export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHING_POSTS_REQUEST = 'LOAD_HASHING_POSTS_REQUEST';
export const LOAD_HASHING_POSTS_SUCCESS = 'LOAD_HASHING_POSTS_SUCCESS';
export const LOAD_HASHING_POSTS_FAILURE = 'LOAD_HASHING_POSTS_FAILURE';


export const LOAD_USER_POSTS_REQUEST = 'LOAD_HASHING_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_HASHING_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_HASHING_POSTS_FAILURE';


export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';

export const REMOVE_OMAGE = 'REMOVE_IMAGE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';


export const UNLIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_DUMMY = 'ADD_DUMMY';

const dummyComment = {
    id:1,
    user: {
        id: 1,
        nickname: "더미"
    },
    content: "더미의 댓글"
}
 const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 1,
        user: {
            nickname: '제로초',
        },
        
    },
};


const dummyPost = {
    id: 2,
    user: 
    {
        id: 1,
        nickname: "제로초",
    },
    content: "저는 더미입니다.",
}



const reducer = (state = initalState, action) =>
{
    switch (action.type)
    {
        case ADD_POST_REQUEST:
            return{
                ...state,
                isAddingPost: true,
                postAdded : false,

            };

        case ADD_POST_SUCCESS:
            { 
   
            return{
                ...state,
                isAddingPost: false,
                mainPosts: [dummyPost,...state.mainPosts],
                postAdded : true,
            

            }
        }



        
        case ADD_POST_FAILURE:
        {
            
            return{ 
                ...state,

                isAddingPost: false,
            }

        }   
        case ADD_COMMENT_SUCCESS:
            {   
                const postIndex = state.mainPosts.findIndex(v=>v.id === action.data.postId);
                console.log(postIndex);
                const post = state.mainPosts[postIndex];
                const Comments = [...post.Comments, dummyComment];
                const mainPosts = [...state.mainPosts];
                mainPosts[postIndex] = {...post,Comments};
         return{  
             ...state,
            isAddingComment: false,
            mainPosts,
            CommentAdded : true,
            }
        }
        case ADD_COMMENT_REQUEST:
            return{
                ...state,
                isAddingComment: true,
                CommentAdded : false,

            };


        case ADD_COMMENT_FAILURE:
        {
            return{ 
                ...state,
                isAddingComment: false,
            }
        }

            default:
                {
                    return{
                        ...state,
                    }
                }
    }
};

export default reducer;