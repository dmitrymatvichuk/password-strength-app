import { Component } from '@angular/core';
import { PasswordFormComponent } from './components/password-form/password-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [PasswordFormComponent, ReactiveFormsModule],
})
export class AppComponent {
  title = 'password-strength-app';
}
