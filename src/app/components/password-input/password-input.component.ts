import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
  standalone: true,
})
export class PasswordInputComponent implements ControlValueAccessor {
  value: string = '';

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  setValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.value = input.value;
      this.onChange(this.value);
      this.onTouch();
    }
  }
}
