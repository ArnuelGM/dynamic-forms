import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { FieldComponent, FormManager, Field } from '../../../interfaces';

@Component({
	selector: 'app-checkbox-field',
	templateUrl: './checkbox-field.component.html',
	styleUrls: ['./checkbox-field.component.scss']
})
export class CheckboxFieldComponent implements OnInit, FieldComponent {

	// implementacion de la interface FormComponent
	@Input() field: Field;
	@Input() formGroup: FormGroup;
	@Input() formManager: FormManager;

	ngOnInit() {
		this.buildChecks();
		const fields = this.formManager.fieldsComponents || {};
		fields[this.field.identification] = this;
		this.formManager.fieldsComponents = fields;
	}

	get _options() {
		return this.formGroup.get(this.field.name) as FormArray;
	}

	buildChecks() {
		this.formGroup.removeControl(this.field.name);
		const checks = [];
		this.field.options.forEach(op => checks.push(new FormControl(op.selected)));
		this.formGroup.addControl(this.field.name, new FormArray(checks, this.field.validations || null));
	}

	get isValid() {
		const {touched, valid} = this.formGroup.controls[this.field.name];
		return touched && valid;
	}

	get touched() {
		return this.formGroup.controls[this.field.name].touched;
	}
}
