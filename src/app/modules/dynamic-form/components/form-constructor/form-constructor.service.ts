import { Injectable } from '@angular/core';
import { Field } from '../../../dynamic-form/interfaces/Field';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormConstructorService {

	toFormGroup(formDefinition: Array<any>){
		const formGroup = {};
		formDefinition['flatMap']( (grupo: {label: string, fields: Field[]}) => {
			grupo.fields.forEach(
				(f: Field) => formGroup[f.name] = new FormControl(f.value || null, f.validations || null)
			);
		});
		return new FormGroup(formGroup);
	}

}
