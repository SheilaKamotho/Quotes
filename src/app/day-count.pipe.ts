import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayCount'
})
export class DayCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); 
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(value-todayWithNoTime )
    const secondsInADay= 86400; 

    var dateDifferenceSeconds=dateDifference*0.001;

    var dateCounter = (dateDifferenceSeconds/secondsInADay)/7;

    if (dateCounter >= 1 && value > todayWithNoTime){
        return dateCounter;
    }else{
        return 0;
    }
  }
}