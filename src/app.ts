import express  from "express"

const app =express();


//Routes......
//next
app.get('/',(req,res)=>{
    res.json({messge:'Welcome'});

})
export default app;