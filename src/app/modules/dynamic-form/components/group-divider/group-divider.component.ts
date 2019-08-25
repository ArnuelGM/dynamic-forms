import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ControlType, FormManager, FieldComponent, Action, Option, Field } from '../../interfaces';

@Component({
	selector: 'app-group-divider',
	templateUrl: './group-divider.component.html',
	styleUrls: ['./group-divider.component.scss']
})
export class GroupDividerComponent implements OnInit, FieldComponent {

	// implementacion de la interface FormComponent
	@Input() field: Field;
	@Input() label: string;
	@Input() formGroup: FormGroup;
	@Input() formManager: FormManager;

	ngOnInit() {
		if(this.formManager){
			const fields = this.formManager.fieldsComponents || {};
			fields[this.field.identification] = this;
			this.formManager.fieldsComponents = fields;
		}
	}
}
