export const initialState ={
    isLoggedIn: false,
    user: {},

};
const dummyUser =
{
    nickname: '제로초',
    Post: [],
    Followings: [],
    Followers : [], 
}
export const LOG_IN = 'LOG_IN'; // name of action
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // name of action
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";


export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

export const signUpsuccess = {
    type: SIGN_UP_SUCCESS

}

export const signUpAction= (data) =>
{
    return { 
    type:SIGN_UP,
    data: data,
    }
}
export const loginAction ={ //  Action
    type: LOG_IN,

};


export const logoutAction = {
    type: LOG_OUT,

 

}

 const reducer = (state = initialState, action) => // reducer
{
    switch(action.type) 
    {
         case LOG_IN:
            {
                return {
                    ...state,
                    isLoggedIn: true,
                    user: dummyUser,
                };
            }
        case LOG_OUT:
            {
                return{
                    ...state,
                    isLoggedIn: false,
                    user: null,
                };
            }

        case SIGN_UP:
            {
                return{
                    ...state,
                    signUpData: action.data

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