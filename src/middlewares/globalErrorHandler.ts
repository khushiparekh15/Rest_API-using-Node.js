import { HttpError } from "http-errors";
import { config } from "../config/config";
import  { NextFunction, Request,Response } from "express";

//Global Error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler = (err:HttpError,req:Request,res:Response,next:NextFunction)=>{

    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        message: err.message,
        
        errorStack:config.env ==='development' ? err.stack:" ",
    });
};

export default globalErrorHandler;