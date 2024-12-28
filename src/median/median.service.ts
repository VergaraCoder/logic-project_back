import { Injectable } from '@nestjs/common';
import { CreateMedianDto } from './dto/create-median.dto';
import { UpdateMedianDto } from './dto/update-median.dto';
import { min } from 'class-validator';

@Injectable()
export class MedianService {
  create(createMedianDto: CreateMedianDto) {
    const arrayOfAllNumbers=createMedianDto.array1.concat(createMedianDto.array2);
   try{
    const array=this.orderArray(arrayOfAllNumbers);
    const countElements=array.length;
    if(countElements % 2==0){
      const mid=countElements/2;      
      const results= array[mid-1] + array[mid];
      return (results)/2;
    }else{
      const mid= ((countElements-1)/2);      
      return array[mid];
    }
   }catch(err:any){

   }
  }

  returnMinor(numbers:number[]){
    let minor=numbers[0];
    let minorIndex=0;
    for(let x = 0; x < numbers.length; x++){
      const currentNumber=numbers[x];
      if(currentNumber<minor){
        minor=currentNumber;
        minorIndex=x;
      }
    }
    return [minor,minorIndex];
  }

  orderArray(numberArray:number[]){
    const count=numberArray.length;
    let newArray=[];
    for(let p = 0; p<count ; p++){
      const numberMinor=this.returnMinor(numberArray);
      numberArray.splice(numberMinor[1],1);
      newArray.push(numberMinor[0]);
      
    }
    return newArray;
  }
}
