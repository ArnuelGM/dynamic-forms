import { Component, OnInit, Input } from '@angular/core';
import { FormLayout, FormManager } from '../../../interfaces';
import { FormGroup } from '@angular/forms';
declare const $: any;

@Component({
	selector: 'app-side-panel-layout',
	templateUrl: './side-panel-layout.component.html',
	styleUrls: ['./side-panel-layout.component.scss']
})
export class SidePanelLayoutComponent implements FormLayout {

	@Input() formGroup: FormGroup;
	@Input() formManager: FormManager;
	@Input() columnsClassLayout?: string = 'col-12';
	@Input() customData?: any;

	public tabActive = 0;
	public groups: Array<any>;

	ngOnInit() {
		this.groups = this.formManager.formClassDefinition.getFormDefinition();
	}

}
