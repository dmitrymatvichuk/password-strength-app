import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  getStrength(password: string): string {
    if (password.length < 6) {
      return 'Weak';
    } else if (password.length < 12) {
      return 'Moderate';
    } else {
      return 'Strong';
    }
  }
}
