import { FormLayout, FormManager } from '../../../interfaces';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-linear-layout',
	templateUrl: './linear-layout.component.html'
})
export class LinearLayoutComponent implements FormLayout {

	@Input() formGroup: FormGroup;
	@Input() formManager: FormManager;
	@Input() columnsClassLayout?: string = 'col-12';
	@Input() customData?: any;

	public groups: Array<any>;

	ngOnInit() {
		this.groups = this.formManager.formClassDefinition.getFormDefinition();
	}

}
