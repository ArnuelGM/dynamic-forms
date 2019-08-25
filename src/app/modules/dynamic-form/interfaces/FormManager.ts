import { Formulario } from './Formulario';
import { FormResponse } from './FormResponse';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { FieldComponent } from './FieldComponent';

export interface FormManager {

	// properties
	formGroup: FormGroup;
	formElement: HTMLFormElement;
	formClassDefinition: Formulario;

	$valueSubject: BehaviorSubject<any>;
	valueEmitter: Observable<any>;

	fieldsComponents: {[key:string]:FieldComponent};

	// methods
	listenEvent (event: string): Function;
	submit(response: FormResponse): any;
	setValue(value: any): void;
}
