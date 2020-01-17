export const initialState ={
    isLoggedIn: false,
    me: {},
    isLoggedOut: false,
    isLoggingIn: false,
    logInErrorReason: '',
    signedUp: false,
    isSigningUp: false,
    signUpErrorReason: '',
    Followings: [],
    Followers: [],
    userInfo: null,
    loginData: {},
};
const dummyUser =
{
    nickname: '제로초',
    Post: [],
    Followings: [],
    Followers : [], 
}

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // name of action
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_IN_REQUEST = 'LOG_IN_REQUREST';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';



export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';


export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';

export const signUpsuccess = {
    type: SIGN_UP_SUCCESS,
}



export const signUpAction= (data) =>
{
    return { 
        type:SIGN_UP_REQUEST,
        data: data,
    }
}
export const loginRequestAction = data =>({ //  Action
    type: LOG_IN_REQUEST,
    data,
});

export const logoutRequestAction = data => ({
    type: LOG_OUT_REQUEST,
    data,
});

export const signRequestAction = data =>({
    type: SIGN_UP_REQUEST,
    data,
});




 const reducer = (state = initialState, action) => // reducer
{
    switch(action.type) 
    {
         case LOG_IN_REQUEST:
            {
                return {
                    ...state,
                    isLoggedIn: false,
                    me: dummyUser,
                    loginData: action.data,
                    isLoading : true,
                    isLoggingIn: true,
                    isLoading: true,
                };
            }
        case LOG_OUT_REQUEST:
            {
                return{
                    ...state,
                    isLoggedIn: false,

                };
            }
            case LOG_IN_SUCCESS:
                {
                    return{
                        ...state,
                        isLoading: false,
                        isLoggingIn: false,
                        isLoggedIn: true,
                    }
                }

            case LOG_IN_FAILURE:
                {
                    return{
                        ...state,
                        isLoggingIn: false,
                        isLoggedIn: false,
                        logInErrorReason: action.error,
                    }
                }

            case SIGN_UP_REQUEST:
            {
                return{
                    ...state,
                    signedUp: false,
                    isSigningUp: true,
                    signUpErrorReason: '',

                }
            }
            case SIGN_UP_SUCCESS:
            {
                    return{
                        ...state,
                        signedUp: true,
                        isSigningUp: false,
                        signUpErrorReason: '',
                    }
            }
            case SIGN_UP_FAILURE:
            {
                return{
                    ...state,
                    signedUp: false,
                    isSigningUp: false,
                    signUpErrorReason: action.error,

                }

            }


         default:
             {
                 return{
                     ...state,
                 };
             }
                

    }
};

export default reducer