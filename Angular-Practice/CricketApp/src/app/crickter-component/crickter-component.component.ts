import { Component } from '@angular/core';

@Component({
  selector: 'app-crickter-component',
  templateUrl: './crickter-component.component.html',
  styleUrls: ['./crickter-component.component.css']
})
export class CrickterComponentComponent {

playerName="Devarsh";
playerType="";
Innings=100;
runsScored=10000;
centuries=50;
wickets=50;
economy=5.6;





bgc='#669900';
change(){
if(this.playerType=='batter'){
  this.bgc='#ff8800';
  
}
else if(this.playerType=='bolwer'){
  this.bgc='#aa66cc';
  
}
else{
  this.bgc='#669900';
}
}

//Submit button
submit(){
  alert("Update Successful");
}

}
