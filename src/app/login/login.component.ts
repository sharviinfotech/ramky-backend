import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  signInForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const email = this.signInForm.get('email')?.value;
      const password = this.signInForm.get('password')?.value;
      console.log('Sign in request:', { email, password });

      // Add your authentication logic here
      if (email === 'test@example.com' && password === 'password123') {
        this.router.navigate(['/dashboard']); // Redirect to dashboard or any page after login
      } else {
        alert('Invalid login credentials');
      }
    }
  }
}
