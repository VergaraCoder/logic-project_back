import { IsArray, IsNotEmpty } from "class-validator";

export class CreateMedianDto {
    @IsNotEmpty()
    @IsArray()
    array1:number[];

    @IsNotEmpty()
    @IsArray()
    array2:number[];
}
