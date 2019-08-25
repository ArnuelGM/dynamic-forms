import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormManager, FieldComponent, Field } from '../../../interfaces';

@Component({
  selector: 'app-file-field',
  templateUrl: './file-field.component.html',
  styleUrls: ['./file-field.component.scss']
})
export class FileFieldComponent implements OnInit, FieldComponent {

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

	getFileNames(fileControl: HTMLInputElement) {
		const {files} = fileControl;
		if( files.length == 0 ) return 'Seleccionar';
		let names = [];
		for (let i=0;i<files.length;names.push(files[i].name),i++);
		// while(files.length>0&&names[names.push(files[names.length].name)]);
		return names.join(', ');
	}

}
