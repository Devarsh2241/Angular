import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: any[] = [];
  addtask(task: string) {
    this.tasks.push({ id: this.tasks.length, name: task })
  }

removetask(id:number){
this.tasks=this.tasks.filter(tasks=>tasks.id!==id)
}


}