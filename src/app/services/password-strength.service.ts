import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  getStrength(password: string): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < 8) {
      return 'Weak';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      return 'Strong';
    } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  }
}
