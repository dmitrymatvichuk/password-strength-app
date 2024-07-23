import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthMeterComponent } from './components/password-strength-meter/password-strength-meter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, PasswordStrengthMeterComponent],
})
export class AppComponent {
  title = 'password-strength-app';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: ['']
    });
  }
}

