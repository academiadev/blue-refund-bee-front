import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';



export class AppUserValidator {

		static hasWhiteSpace(control: AbstractControl): ValidationErrors | null {
				const valorDoCampo: string = control.value;
				if (valorDoCampo.indexOf(' ') >= 0) {
						return { hasWhitespace: true };
				}
				return null;
		}

		static existent(control: AbstractControl): Promise<ValidationErrors> | null {
				return new Promise((resolve, reject) => {
						setTimeout(() => {
								if (control.value === 'pedro') {
										resolve({ existentP: true });
								} else {
										resolve(null);
								}
						}, 2000);
				});
		}
}
