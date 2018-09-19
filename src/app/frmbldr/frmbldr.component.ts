import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-frmbldr',
  templateUrl: './frmbldr.component.html',
  styleUrls: ['./frmbldr.component.css']
})
export class FrmbldrComponent implements OnInit {

  profileForm = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    address: this.fb.group({
      street:[''],
      city:[''],
      state:[''],
      zip:['']
    })
  });
  constructor(private fb:FormBuilder) { }
  updateProfile(){
    this.profileForm.patchValue(
      {
        firstName:'Nancy',
        address: {
          street:'123 drew street'
        }
      }
    )
  }
  ngOnInit() {
  }

}
