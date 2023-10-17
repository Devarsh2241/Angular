import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  
  alert:boolean=false;

  addresto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl('')
  })
  
  constructor(private resto:RestoService){}
  collectresto(){
    this.resto.saveResto(this.addresto.value);
    this.alert=true;
    this.addresto.reset({})
  }
  alertclean(){
    this.alert=false
  }

  
  }

