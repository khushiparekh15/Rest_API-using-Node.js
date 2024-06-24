import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import createBook from "./controllers/createBook";
const app =express();
//Routes......
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/',(req,res,next)=>{
    res.json({messge:'Welcome'});

});
app.use("/api/users",userRouter);
app.use("/api/books",createBook);
app.use(globalErrorHandler);

export default app;