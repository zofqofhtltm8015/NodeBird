const express = require('express');
const morgan = require('morgan');


const cors = require('cors');

const app = express();

const userAPIRouter = require('./routes/user');

const postAPIRouter = require('./routes/post');

const postsAPIRouter = require('./routes/posts');



app.use(express.json()); // json형식의 본문을 처리(객채형식의 본문)
app.use(express.urlencoded({extended: true})); // form으로 넘어온 데이터 처리

const db = require('./models');

db.sequelize.sync();

app.use(cors());


app.use('/api/user',userAPIRouter)

app.use('api/post',postAPIRouter)

app.use('api/posts',postsAPIRouter)

app.use(morgan('dev'));







app.listen(3065, ()=>
{
    console.log(`sever is running on localhost: 3065`);
});