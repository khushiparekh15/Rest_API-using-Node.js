import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import createBook from "./controllers/createBook";
import registerController from "./controllers/registerController";
import cors from "cors";
import { config } from "./config/config";
const app =express();
//Routes......
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/',(req,res,next)=>{
    res.json({messge:'Welcome'});

});
app.use(
    cors({
        origin:config.frontendDomain,
    })
)
app.use("/api/users",userRouter);
app.use("/api/books",createBook);
app.use('api/users/register',registerController);

app.use(globalErrorHandler);

export default app;