import { IsNotEmpty, isNotEmpty, IsString } from "class-validator";

export class CreateSubstractStringDto {
    @IsNotEmpty()
    @IsString()
    characters:string;
}
