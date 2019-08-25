import { Injectable } from '@angular/core';
import { FormManager } from 'src/app/modules/dynamic-form/interfaces';
import { InformacionGeneralDefinition } from 'src/app/form-definitions/informacion-general-form-definition';

@Injectable({
	providedIn: 'root'
})
export class InformacionGeneralManagerService implements FormManager {

	formGroup: import("@angular/forms").FormGroup;
	formElement: HTMLFormElement;
	formClassDefinition = new InformacionGeneralDefinition();
	$valueSubject: import("rxjs").BehaviorSubject<any>;
	valueEmitter: import("rxjs").Observable<any>;
	fieldsComponents: { [key: string]: import("../../modules/dynamic-form/interfaces").FieldComponent; };

	listenEvent(event: string): Function {
		return this[event];
	}

	submit(response: import("../../modules/dynamic-form/interfaces").FormResponse) {
		alert(JSON.stringify(response.ngForm.value));
	}

	setValue(value: any): void {

	}
}
