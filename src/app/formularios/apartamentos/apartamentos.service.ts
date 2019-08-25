import { Injectable } from '@angular/core';
import { FormManager, Formulario, FieldComponent, FormResponse } from 'src/app/modules/dynamic-form/interfaces';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ApartamentosFormDefinition } from 'src/app/form-definitions/apartamentos-form-definition';

@Injectable()
export class ApartamentosService implements FormManager {

	formGroup: FormGroup;
	formElement: HTMLFormElement;
	fieldsComponents: { [key: string]: FieldComponent };

	formClassDefinition = new ApartamentosFormDefinition();
	$valueSubject = new BehaviorSubject<any>(null);
	valueEmitter = this.$valueSubject.asObservable();

	listenEvent(event: string): Function {
		return this[event];
	}

	submit(response: FormResponse) {
		alert(JSON.stringify(response.ngForm.value));
	}

	setValue(value: any): void {

	}

}
