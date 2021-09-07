import { Component } from '@angular/core';
import { AuthService } from 'src/app/sevices/auth.service';

import { FormBuilder, FormControl,FormGroupDirective,NgForm , FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
export class HomeComponent {
  loginForm: any;
  signupForm:any;
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
 

  constructor(public authService: AuthService,
    private formBuilder: FormBuilder,
    ) {
      this.loginForm = this.formBuilder.group({
        email: (['', [Validators.required ,  Validators.pattern(('[a-zA-Z]+'))]]),
        password: ['', Validators.required],
       
      });
      this.signupForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
       
      });
    }

  signup() {
    console.log(this.signupForm.value.email, this.signupForm.value.password,'btn clicked')
    this.authService.signup(this.signupForm.value.email, this.signupForm.value.password);
    // this.email = this.password = '';
  }

  login() {
    console.log(this.loginForm.value.email, this.loginForm.value.password,'btn clicked')
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    // this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
}
