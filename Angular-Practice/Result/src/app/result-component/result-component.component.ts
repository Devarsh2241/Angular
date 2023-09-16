import { Component } from '@angular/core';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent {

  programme="MCA";
  semester=3;
  rollno=1;
  m1=0;
  m2=0;
  m3=0
  m4=0;
  total=0;
  
getData(val:number){
  this.total=this.m1+this.m2+this.m3+this.m4;
  
}

// currentvalue='';
// getValue(val:any){
// this.currentvalue=val
// }
}
