import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormManager, ControlType, FieldComponent, Action, Option, Field } from '../../../interfaces';

@Component({
	selector: 'app-textarea-field',
	templateUrl: './textarea-field.component.html',
	styleUrls: ['./textarea-field.component.scss']
})
export class TextareaFieldComponent implements OnInit, FieldComponent {

	// implementacion de la interface FormComponent
	@Input() field: Field;
	@Input() formGroup: FormGroup;
	@Input() formManager: FormManager;

	ngOnInit() {
		const fields = this.formManager.fieldsComponents || {};
		fields[this.field.identification] = this;
		this.formManager.fieldsComponents = fields;
	}

	get isValid() {
		const {touched, valid} = this.formGroup.controls[this.field.name];
		return touched && valid;
	}

	get touched() {
		return this.formGroup.controls[this.field.name].touched;
	}
}
