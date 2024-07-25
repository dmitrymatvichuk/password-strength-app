import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class PasswordStrengthComponent {
  @Input() strength: string = 'Empty';
}
