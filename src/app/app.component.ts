import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthService } from './services/password-strength.service';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { PasswordStrengthComponent } from './components/password-strength-meter/password-strength.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, PasswordInputComponent, PasswordStrengthComponent, NgIf],
})
export class AppComponent {
  form: FormGroup;
  passwordStrength: string = 'Weak';

  constructor(private fb: FormBuilder, private passwordStrengthService: PasswordStrengthService) {
    this.form = this.fb.group({
      password: [''],
    });

    this.form.get('password')?.valueChanges.subscribe(value => {
      this.passwordStrength = this.passwordStrengthService.getStrength(value);
    });
  }
}
