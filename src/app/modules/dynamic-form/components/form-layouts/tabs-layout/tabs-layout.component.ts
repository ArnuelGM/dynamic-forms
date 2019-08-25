import { Component, OnInit, Input } from '@angular/core';
import { FormLayout, FormManager } from '../../../interfaces';
import { FormGroup } from '@angular/forms';
import { FormFieldFabricService } from '../../form-field/form-field-fabric.service';

@Component({
	selector: 'app-tabs-layout',
	templateUrl: './tabs-layout.component.html',
	styleUrls: ['./tabs-layout.component.scss'],
	providers: [FormFieldFabricService]
})
export class TabsLayoutComponent implements FormLayout {

	@Input() formGroup: FormGroup;
	@Input() formManager: FormManager;
	@Input() columnsClassLayout?: string = 'col-12';
	@Input() customData?: any;

	public groups: Array<any>;

	ngOnInit() {
		this.groups = this.formManager.formClassDefinition.getFormDefinition();
	}

}
