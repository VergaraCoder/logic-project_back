import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";
import path from "path";



@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const request:Request=host.switchToHttp().getRequest();
        const response:Response=host.switchToHttp().getResponse();

        const ifExist=exception.message.split(" :: ");
        const ifExist2=exception.response;
        let message;
        let status;

        if(ifExist2 && ifExist2.message){
            message=ifExist2.message ;
            status=ifExist2.statusCode;
        }
        else if(ifExist.length == 2){
            message=ifExist[1];
            status=ifExist[0];
        }
        else{
            status=500;
            message=HttpStatus.INTERNAL_SERVER_ERROR;
        }

        response.status(status).json({
            message:message,
            status:status,
            timeStamp:new Date().toISOString(),
            path:request.url,
            method:request.method
        })
    }
}