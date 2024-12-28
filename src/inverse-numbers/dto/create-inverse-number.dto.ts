import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateInverseNumberDto {
    @IsNotEmpty()
    @IsNumber()
    number:number;
}
