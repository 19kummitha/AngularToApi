import { Component, input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  registerForm: FormGroup=null!;
  submitted = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit(){
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['']
    },

  {
    validator:this.passwordMismatchValidator
  });

  }
  validateControl(input:string)
    {
      return this.registerForm.get(input)?.invalid &&
      (this.registerForm.get(input)?.touched||
      this.registerForm.get(input)?.dirty)
    }
    validateControlError(input:string,errorType:string)
    {
      return this.registerForm.get(input)?.hasError(errorType)&&
      (this.registerForm.get(input)?.touched||
      this.registerForm.get(input)?.dirty)
    }
  onSubmit(): void {
    if(this.registerForm.valid){
    console.log(this.registerForm.value);
    }
  }
  passwordMismatchValidator(control:AbstractControl){
    const password=control.get('password')?.value;
    const confirmPassword=control.get('confirmPassword')?.value;
    if(password!==confirmPassword)
    {
      control.get('confirmPassword')?.setErrors({passwordMismatch:true});
      return {passwordMismatch:true};
    }
    else{
      return null;
    }
  }
}