import { Component, Input } from '@angular/core';
import { FormLayout, FormManager } from '../../../interfaces';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-plain-layout',
	templateUrl: './plain-layout.component.html',
	styleUrls: ['./plain-layout.component.scss']
})
export class PlainLayoutComponent implements FormLayout {

	@Input() formGroup: FormGroup;
	@Input() formManager: FormManager;
	@Input() columnsClassLayout?: string  = 'col-12';
	@Input() customData?: any;

	public groups: Array<any>;

	ngOnInit() {
		this.groups = this.formManager.formClassDefinition.getFormDefinition();
	}

}
