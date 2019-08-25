import { Field } from '.';
import { FormGroup } from '@angular/forms';
import { FormManager } from './FormManager';

export interface FieldComponent {
	field: Field;
	formGroup: FormGroup;
	formManager: FormManager;
}
