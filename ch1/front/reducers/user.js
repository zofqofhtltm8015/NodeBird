const initialState ={
    isLoggedIn: false,
    user: {},
};

const LOG_IN = 'LOG_IN'; // name of action
const LOG_OUT = 'LOG_OUT'
const loginAction ={ //  Action
    type: LOG_IN,
    data: {
        nickname: '제로초',
    }
};


const logoutAction = {

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
                    user: action.data,
                }
            }
        case LOG_OUT:
            {
                return{
                    ...state,
                    isLoggedIn: false,
                    user: {},
                }
            }

    }
};

export default reducer;