import { Component } from '@angular/core';
import { Result } from '../Result';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

result:Result=
  {
    id:1,
    paperCode:'PS03CMCA51',
    paperTitle:'Web Application Framework',
    marks:0,
    pass:''

  }
  getdata(){
    if(this.result.marks>=40){
      this.result.pass='Pass';
    }
    else{
      this.result.pass='Fail'
    }
  }
}


