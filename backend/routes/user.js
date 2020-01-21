const express = require('express');
const db = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt');
router.get('/',(req,res)=>
{

});

router.post('/', async (req,res,next)=>
{

    try{
        const exUser = await db.User.findOne({
            where: {
                userId : req.body.userId,
            },
        });
        if(exUser)
        {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password,11);
        const newUser = await db.User.create({
         nickname : req.body.nickname , 
          userId : req.body.userId,
          password : hashedPassword, 
        });
        return res.status(200).json(newUser);
    } catch(e)
    {
        console.log(req.body);
        console.error(e);
        return res.status(403).send('전송은 1돼요');
   
    
    }
});
router.get('/:id',(req,res)=>
{
});
router.post('/logout',(req,res)=>
{

});
router.post('/login',(req,res)=>
{

});
router.get('/:id/follow',(req,res)=>{

});
router.post('/:id/follow',(req,res)=>
{

});
router.delete('/:id/follow',(req,res)=>
{

});router.delete('/:id/follower',(req,res)=>
{

});
router.get('/:id/posts',(req,res)=>
{

});

module.exports = router;