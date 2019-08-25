import { Component, OnInit, Input } from '@angular/core';
import { FieldComponent, FormManager, Field } from '../../../interfaces';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-actions-field',
	templateUrl: './actions-field.component.html',
	styleUrls: ['./actions-field.component.scss']
})
export class ActionsFieldComponent implements OnInit, FieldComponent {

	// implementacion de la interface FormComponent
	@Input() field: Field;
	@Input() formGroup: FormGroup;
	@Input() formManager: FormManager;

	ngOnInit() {
		const fields = this.formManager.fieldsComponents || {};
		fields[this.field.identification] = this;
		this.formManager.fieldsComponents = fields;
	}
}
