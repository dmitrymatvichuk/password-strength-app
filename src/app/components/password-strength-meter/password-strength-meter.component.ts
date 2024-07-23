import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { PasswordStrengthService } from '../../services/password-strength.service';

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordStrengthMeterComponent),
      multi: true,
    },
    PasswordStrengthService
  ],
  standalone: true,
  imports: [NgClass, NgIf],
})
export class PasswordStrengthMeterComponent implements ControlValueAccessor {
  password: string = '';
  strength: string = 'Weak';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  onPasswordChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
    this.strength = this.passwordStrengthService.getStrength(this.password);
    this.onChange(this.password);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.password = value || '';
    this.strength = this.passwordStrengthService.getStrength(this.password);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
