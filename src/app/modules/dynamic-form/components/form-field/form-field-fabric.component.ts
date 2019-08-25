import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormManager,Field } from '../../interfaces';
import { FormFieldFabricService } from './form-field-fabric.service';

@Component({
	selector: 'app-form-field-fabric',
	templateUrl: './form-field-fabric.component.html',
	styleUrls: ['./form-field-fabric.component.scss'],
	providers: [FormFieldFabricService]
})
export class FormFieldFabricComponent implements OnInit {

	@Input() field: Field;
	@Input() formGroup: FormGroup;
	@Input() formManager: FormManager;
	@Input() culumnsClassLayout: string;

	public fieldData: any;
	public fieldComponent: any;

	constructor(
		private _fabric: FormFieldFabricService
	) {}

	ngOnInit() {
		this.getFieldData();
		this.selectFieldType();
	}

	private selectFieldType() {
		this.fieldComponent = this._fabric.fabricComponent( this.field.controlType );
	}

	private getFieldData() {
		this.fieldData = {field: this.field, formManager: this.formManager, formGroup: this.formGroup};
	}
}
