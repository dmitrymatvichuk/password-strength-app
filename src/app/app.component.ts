import { Component } from '@angular/core';
import { PasswordStrengthMeterComponent } from './components/password-strength-meter/password-strength-meter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [PasswordStrengthMeterComponent],
})
export class AppComponent {
  title = 'password-strength-app';
}
