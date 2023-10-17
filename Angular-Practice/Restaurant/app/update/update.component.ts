import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  alert: boolean = false

  editresto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
  }

 

  updateresto() {
    this.resto.updateresto(this.editresto.value)
    this.alert = true;
    this.editresto.reset({})
  }

  alertclean(){
    this.alert=false
    
  }
}