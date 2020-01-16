import {all,fork,call,put,take,delay, takeLatest} from 'redux-saga/effects';
import {LOG_IN,LOG_OUT,LOG_IN_SUCCESS,    LOG_IN_FAILURE,
} from '../reducers/user';
import { takeEvery } from 'redux-saga/effects';



function loginAPI()
{
    //서버에 요청을 보내는 부분
}


function* login()
{
    try{
    //    yield call(loginAPI);
    yield delay(100);
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

function* watchLogin()
{
  
    takeLatest(LOG_IN,function* ()
    {
        yield put({
            type: LOG_IN_SUCCESS,

        })
    
    })
}

function watchSignUp()

{

}




export default function* userSaga()
{
     yield all([
       
         watchLogin(),
         watchSignUp(),
     ]);
}