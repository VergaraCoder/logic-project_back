import { Injectable } from '@nestjs/common';
import { CreateInverseNumberDto } from './dto/create-inverse-number.dto';
import { UpdateInverseNumberDto } from './dto/update-inverse-number.dto';
import { ManageError } from 'src/common/error/custom/custom.error';

@Injectable()
export class InverseNumbersService {
  create(numbers:number) {
    const parseStringNumbers=numbers.toString();
    let newNumber="";
    let sign=false;
    try{  
      for(let x = 0 ; x<parseStringNumbers.length; x++){
        const number=parseStringNumbers[x];
        if(number=="-"){
          sign=true;
        }
        if(number=="0"){
          continue;
        }
        newNumber= number + newNumber ;
      }
      if(newNumber.length==0){
        throw new ManageError({
          status:"BAD_REQUEST",
          message:"DOES THERE ARE NOT NUMBERS TO RETURN"
        });
      }
      let numberBoolean= sign ? "-".concat(newNumber) : newNumber ;
      return parseInt(numberBoolean);
    }catch(err:any){}
  }
}
