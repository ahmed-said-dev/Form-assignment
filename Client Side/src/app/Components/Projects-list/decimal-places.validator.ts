import { AbstractControl, ValidatorFn } from '@angular/forms';

export function decimalPlacesValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value || isNaN(control.value)) {
      return null;
    }

    const decimalPlaces = (control.value.toString().split('.')[1] || '').length;
    return decimalPlaces > 3 ? { 'tooManyDecimalPlaces': { value: control.value } } : null;
  };
}
