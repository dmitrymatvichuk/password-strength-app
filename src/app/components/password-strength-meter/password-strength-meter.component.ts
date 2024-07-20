import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PasswordStrengthMeterComponent {
  password: string = '';
  strength: string = 'Weak';

  onPasswordChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
    this.updateStrength(this.password);
  }

  private updateStrength(password: string) {
    if (password.length < 6) {
      this.strength = 'Weak';
    } else if (password.length < 12) {
      this.strength = 'Medium';
    } else {
      this.strength = 'Strong';
    }
  }
}
