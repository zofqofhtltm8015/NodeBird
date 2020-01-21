import {all,fork,call,put,take,delay, takeLatest} from 'redux-saga/effects';
import {
    LOG_IN, LOG_OUT, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST,SIGN_UP_SUCCESS,SIGN_UP_FAILURE,SIGN_UP_REQUEST, LOG_OUT_REQUEST, LOG_OUT_FAILURE, LOG_OUT_SUCCESS
} from '../reducers/user';
import { takeEvery } from 'redux-saga/effects';
import axios from 'axios'

function loginAPI()
{
    return axios.post('/login');    
    //서버에 요청을 보내는 부분
}

function signUpAPI(signUpData)
{
    console.log(signUpData);
    return axios.post('http://localhost:3065/api/user/',signUpData)    

}

function* login()
{
   // yield call(loginAPI);
    try{
    //    yield call(loginAPI);
    yield delay(2000);
        yield put({
            type: LOG_IN_SUCCESS,
        })
    } catch(e)
    {
        console.log(e);
        yield put({
            type: LOG_IN_FAILURE,
        })
    }
}
function* Signup(action)
{
    try{
        //    yield call(signUpAPI);
        console.log(`action.data :`);
        console.log(action.data);
        yield call(signUpAPI,action.data)
        yield put({
            type: SIGN_UP_SUCCESS,
        })
    } catch(e)
    {
        console.log(e);
        yield put({
            type: SIGN_UP_FAILURE,
        })
    }
}


function* logOut()
{
    try{
        yield put({
            type: LOG_OUT_SUCCESS
        })
    }
    catch(e)
    {
        console.log(e);
        yield put({
            type: LOG_OUT_FAILURE
        })
    }
}


function* watchLogin()
{
  
    yield takeLatest(LOG_IN_REQUEST,login);
}
function* watchLogOut()
{
    yield takeLatest(LOG_OUT_REQUEST,logOut)
}

function* watchSignUp()
{
    yield takeEvery(SIGN_UP_REQUEST,Signup)
}




export default function* userSaga()
{
     yield all([
       
         fork(watchLogin),
         fork(watchSignUp),
         fork(watchLogOut),
     ]);
}