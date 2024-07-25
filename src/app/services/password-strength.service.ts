import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  getStrength(password: string): string {
    if (!password) {
      return 'Empty';
    }
    if (password.length < 8) {
      return 'Weak';
    }
    if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password)) {
      return 'Strong';
    }
    if ((/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) ||
        (/[a-zA-Z]/.test(password) && /[^a-zA-Z0-9]/.test(password)) ||
        (/[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password))) {
      return 'Medium';
    }
    return 'Weak';
  }
}
