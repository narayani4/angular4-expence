import { Component, OnInit} from '@angular/core';
//import { OnInit } from '@angular/core';
import{ExpenceInter} from './exfolder/expence';
import{ExpenceService} from './expence.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {
  title = 'Your Expence Detail';
  //local variable expencomponent
  expencomponent: ExpenceInter[];
  expenceform:boolean=false;
  isnewform:boolean;
  newExpence:any={};
constructor(private _expenceservice:ExpenceService)
{
}
ngOnInit()
{
this.get();
}
get()
{
this.expencomponent=this._expenceservice. getExpensefromdata();
}
//newexp is a local.can able to change
saveExpence(newexp:ExpenceInter)
{
  this._expenceservice.addExpence(newexp);
  this.expenceform=false;
  return;
 /* if(this.isnewform)
  {
    //add aproduct
    this.newExpence=newexp;
   // this._expenceservice.addExpence(newexp);
  }*/
}

}
