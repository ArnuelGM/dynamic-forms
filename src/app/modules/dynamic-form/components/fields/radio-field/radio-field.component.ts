import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormManager, FieldComponent, Field } from '../../../interfaces';

@Component({
	selector: 'app-radio-field',
	templateUrl: './radio-field.component.html',
	styleUrls: ['./radio-field.component.scss']
})
export class RadioFieldComponent implements OnInit, FieldComponent {

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
