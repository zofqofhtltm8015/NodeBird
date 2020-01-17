export const initalState ={
    
        isLoggedIn: true,
        imagePath: [],
        mainPosts: [{
            user:{
                id: 1,
                nickname: '제로초',
            },
            content: '첫 번째 게시글',
            img: 'https://wallpapercave.com/wp/wp2195776.jpg',
    
        }],
        addPostErrorReason: false,
        isAddingPost: false,
    
};


export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHING_POSTS_REQUEST = 'LOAD_HASHING_POSTS_REQUEST';
export const LOAD_HASHING_POSTS_SUCCESS = 'LOAD_HASHING_POSTS_SUCCESS';
export const LOAD_HASHING_POSTS_FAILURE = 'LOAD_HASHING_POSTS_FAILURE';

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
export const ADD_COMMENT_SUCUESS = 'ADD_COMMENT_SUCUESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const RETWEET_REQUREST = 'RETWEET_REQUREST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUREST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUREST';


const ADD_POST_REQUSET = 'ADD_POST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_DUMMY = 'ADD_DUMMY';

export const addPost ={
    type: ADD_POST,
};

export const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 1,
        User: {
            nickname: '제로초',
        },
    },
};

const reducer = (state = initalState, action) =>
{
    switch (action.type)
    {
        case ADD_POST_REQUSET:
            return{
                ...state,
                
            };
        case ADD_DUMMY:
            {
                return{
                    ...state,
                    mainPosts: [action.data,...state.mainPosts],
                }
            };

            default:
                {
                    return{
                        ...state,
                    }
                }
    }
};

export default reducer;