import { FormManager, FieldComponent, FormResponse } from "src/app/modules/dynamic-form/interfaces";
import { TorresFormDefinition } from '../../form-definitions/torres-form-definition';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class TorresFormManager implements FormManager {

	// disponibles en tiempo de ejecucion
	formGroup: FormGroup;
	formElement: HTMLFormElement;
	fieldsComponents: {[key:string]:FieldComponent};

	formClassDefinition = new TorresFormDefinition();
	$valueSubject = new BehaviorSubject<any>(null);
	valueEmitter = this.$valueSubject.asObservable();

	// methods
	listenEvent (event: string) {
		return this[event];
	}

	submit(response: FormResponse) {
		alert(JSON.stringify(response.ngForm.value));
	}

	setValue (value: any) {

	}

}
