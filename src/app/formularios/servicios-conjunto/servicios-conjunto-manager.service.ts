import { Injectable } from '@angular/core';
import { FormManager } from 'src/app/modules/dynamic-form/interfaces';
import { FormGroup } from '@angular/forms';
import { ServiciosConjuntoComponent } from './servicios-conjunto.component';
import { ServiciosConjuntoDefinition } from 'src/app/form-definitions/servicios-conjunto-form-definition';

@Injectable({
	providedIn: 'root'
})
export class ServiciosConjuntoManagerService implements FormManager{

	formGroup: FormGroup;
	formElement: HTMLFormElement;
	$valueSubject: import("rxjs").BehaviorSubject<any>;
	valueEmitter: import("rxjs").Observable<any>;
	fieldsComponents: { [key: string]: import("../../modules/dynamic-form/interfaces").FieldComponent; };
	formClassDefinition = new ServiciosConjuntoDefinition();


	listenEvent(event: string): Function {
		return this[event];
	}

	submit(response: import("../../modules/dynamic-form/interfaces").FormResponse) {
		throw new Error("Method not implemented.");
	}

	setValue(value: any): void {
		throw new Error("Method not implemented.");
	}

}
