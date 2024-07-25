import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthService } from '../../services/password-strength.service';
import { PasswordInputComponent } from '../password-input/password-input.component';
import { PasswordStrengthComponent } from '../password-strength/password-strength.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, PasswordInputComponent, PasswordStrengthComponent, CommonModule],
})
export class PasswordFormComponent {
  form: FormGroup;
  passwordStrength: string = 'Empty';

  constructor(private passwordStrengthService: PasswordStrengthService) {
    this.form = new FormGroup({
      password: new FormControl('')
    });

    this.form.get('password')?.valueChanges.subscribe(value => {
      this.passwordStrength = this.passwordStrengthService.getStrength(value);
    });
  }
}
