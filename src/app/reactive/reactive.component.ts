import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { letterOnlyValidtor } from '../directives/letterOnly.directive';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  submitted :boolean = false;
  exampleForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.exampleForm = this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(15),letterOnlyValidtor()]],
      lastName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
      middleInitial:['',[Validators.required,Validators.maxLength(1)]],
      gender:['',[Validators.required]]
    })
  }

  resetForm(form:any){
    this.submitted = false;
    form.reset();
  }
  
  hasErrors(field:any){
    return (this.exampleForm.get(field).invalid && this.exampleForm.get(field).touched && this.exampleForm.get(field).errors)
  }

  validateForm(form:any){
    Object.keys(form.controls).forEach( field =>{
      const control = form.get(field);
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true});
      }  else if(control instanceof FormGroup){
        this.validateForm(control);
      }
    })
  }

  submitForm(form:any){
    if(form.valid){
      this.submitted = true;
    } else{
      this.validateForm(form)
    }
  }

  get firstName() { return this.exampleForm.get('firstName') }
  get lastName() { return this.exampleForm.get('lastName') }
  get middleInitial() { return this.exampleForm.get('middleInitial') }
  get gender() { return this.exampleForm.get('gender') }

}
