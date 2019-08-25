import { FormGroup } from '@angular/forms';
import { FormManager } from './FormManager';

export interface FormLayout {
	formGroup: FormGroup;
	formManager: FormManager;
	colClassLayout?: string;
	customData?: any;
}
