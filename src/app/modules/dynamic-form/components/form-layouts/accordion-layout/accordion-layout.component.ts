import { Component, Input } from '@angular/core';
import { FormLayout, FormManager } from '../../../interfaces';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-accordion-layout',
	templateUrl: './accordion-layout.component.html',
	styleUrls: ['./accordion-layout.component.scss']
})
export class AccordionLayoutComponent implements FormLayout {

	@Input() formGroup: FormGroup;
	@Input() formManager: FormManager;
	@Input() columnsClassLayout?: string = 'col-12';
	@Input() customData?: any;

	public groups: Array<any>;

	ngOnInit() {
		this.groups = this.formManager.formClassDefinition.getFormDefinition();
	}

}
