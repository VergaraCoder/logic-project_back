import { Injectable } from '@nestjs/common';
import { CreateSubstractStringDto } from './dto/create-substract_string.dto';
import { UpdateSubstractStringDto } from './dto/update-substract_string.dto';

@Injectable()
export class SubstractStringService {
  subtractString(phrase:string){
    let objectString={};
    try{
      for(let i=0; i<phrase.length; i++){
        const letter1=phrase[i];
        if(objectString[letter1]){
          continue;
        }else{
          objectString[letter1]=1;
        }
      }

      return{
        characters:Object.keys(objectString).toString(),
        count:Object.keys(objectString).length
      };
    }catch(err:any){

    }
  }
}
