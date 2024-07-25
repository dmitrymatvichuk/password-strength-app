import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getStrength(password: string): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);

    if (password.length === 0) {
      return 'Empty';
    } else if (password.length < 8) {
      return 'Short';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      return 'Strong';
    } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  }
}
