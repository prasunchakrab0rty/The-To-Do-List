import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor() { }

  name = new FormControl('');
  updateName(){
    this.name.setValue('Prasun');
  }

  profileForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    address : new FormGroup({
      street : new FormControl(''),
      city : new FormControl(''),
      state : new FormControl(''),
      zip : new FormControl('')
    })
  });
  onSubmit(){
    console.warn(this.profileForm.value);
  }
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
