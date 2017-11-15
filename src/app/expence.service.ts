//
import { Injectable } from '@angular/core';
import {ExpenceInter} from './exfolder/expence';
import {data_for_expense} from './expencedata';
@Injectable()
export class ExpenceService 
{
    private expdata=data_for_expense;
    getExpensefromdata():ExpenceInter[] 
    {
console.log(this.expdata);
        return(this.expdata)
    }
//addexpservice is a local.can able to change
addExpence(addexpservice:ExpenceInter)
{
this.expdata.push(addexpservice);
console.log(this.expdata);

}
}

   //local function name: getEpenceservice
    /*getEpenceservice(): ExpenceInter[] 
 {
        return [{
            loan: 2345,
            mobile: 89,
            internet: 56,
            water: 76.9,
            gas: 98.8,
            electricity: 45
         }]

 }*/
