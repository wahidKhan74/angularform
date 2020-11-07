import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  submitted :boolean = false;
  person = {firstName:"",lastName:"",middleInitial:"",gender:""}

  constructor() { }

  ngOnInit(): void {
  }

  resetForm(form:any){
    this.submitted = false;
    form.reset();
  }
  
  hasErrors(field:any){
    return (field.invalid && field.touched && field.errors)
  }

  validateForm(form:any){
    Object.keys(form.controls).forEach( field =>{
      const control = form.control[field];
      control.markAsTouched({ onlySelf : true})
    })
  }

  submitForm(form:any){
    if(form.valid){
      this.submitted = true;
    } else{
      this.validateForm(form)
    }
  }
}
