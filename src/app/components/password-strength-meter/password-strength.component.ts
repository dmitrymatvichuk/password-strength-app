import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
  standalone: true,
  imports: [NgClass],
})
export class PasswordStrengthComponent {
  @Input() strength: string = 'Weak';
}
