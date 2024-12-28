import { HttpException, HttpStatus } from "@nestjs/common";

export class ManageError extends Error{
    constructor({message,status}:{status:keyof typeof HttpStatus, message:string}){
        super(`${message} :: ${status}`);
    }

    signedError(message:string){
        const messageExist=message.split(" :: ");
        if(messageExist){
            throw new HttpException(message,HttpStatus[message[0]]);
        }else{
            throw new HttpException(message,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}