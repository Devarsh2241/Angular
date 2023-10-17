import { Component,OnInit } from '@angular/core';
import { RestoService } from '../resto.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor(private resto:RestoService){}
  collection:any=[];
  ngOnInit(): void{
    this.resto.getList().subscribe((result)=>{
      
      this.collection=result;
    })
  }  
  deleteresto(item:any){
    this.collection.splice(item-1,)
    this.resto.deleteresto(item).subscribe((result)=>{
      
    })
  }

}
