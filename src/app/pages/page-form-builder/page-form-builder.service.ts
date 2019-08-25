import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormConstructorComponent } from 'src/app/modules/dynamic-form/components';
import { FormResponse, Field, Formulario, Option } from 'src/app/modules/dynamic-form/interfaces';
import { FormBuilderManagerService } from 'src/app/components/form-builder/FormBuilderManagerService';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';
declare const $: any;

@Injectable()
export class PageFormBuilderService {

	formConfigSubscription: Subscription;
	controlConfigSubscription: Subscription;
	addOptionSubscription: Subscription;

	formConfig = {};
	controlConfigOptions: Option[] = [];

	controles: any[] = [
		{
			label: 'Fields',
			fields: []
		}
	];

	formLayout = 'tabs';

	// propiedades para la vista previa
	formComponentPrevData = null;
	formComponentPrev = null;

	constructor(
		public _manager: FormBuilderManagerService,
		public _modal: NgbModal
	) {}

	init() {
		this.controlConfigSubscription = this._manager.onControlConfig.pipe(
			filter( res => !!res )
		).subscribe((response) => this.addControl(response));

		this.formConfigSubscription = this._manager.onFormConfig.pipe(
			filter( res => !!res )
		).subscribe((response) => this.propertiesForm(response) );

		this.addOptionSubscription = this._manager.onAddControlOption.pipe(
			filter( res => !!res )
		).subscribe((response) => this.addControlOption(response) );
	}

	addControlOption(op: Option) {
		if(op.label.trim() && op.value.trim()){
			this.controlConfigOptions.push(op);
		}
		this._manager.formGroup.get('option_label').setValue(null);
		this._manager.formGroup.get('option_value').setValue(null);
	}

	addControl(response: any) {
		const control = {...response, options: this.controlConfigOptions};
		this.controlConfigOptions = [];

		if (!control['id']) control['id'] = new Date().getTime();

		this.saveControl(control);
		this.patchForm();
		this.generatePrevisualization();
	}

	saveControl(control: any) {
		let index = -1;
		this.controles[0].fields.map((c, i) => {
			if (c.id == control.id) {
				index = i;
			}
		});
		if (index != -1) this.controles[0].fields.splice(index, 1, control);
		else this.controles[0].fields.push(control);
	}

	patchForm(control = {}) {
		this._manager.formGroup.reset();
		this.controlConfigOptions = control['options'] || [];
		const patch = {
			...this.formConfig,
			...control
		};
		this._manager.setValue(patch);
	}

	generatePrevisualization() {
		const formComponentPrevManager = new FormBuilderManagerService();
		formComponentPrevManager.formClassDefinition = new PrevForm();
		formComponentPrevManager.submit = (response: FormResponse) => {
			this._modal.dismissAll();
		};
		formComponentPrevManager.formClassDefinition.formDefinition = [...this.controles];
		this.formComponentPrevData = {
			...this.formConfig,
			formManager: formComponentPrevManager,
			enableSubmitManager: true,
			devMode: true,
			formLayout: Array.isArray(this.formConfig['formLayout']) ? this.formConfig['formLayout'][0] : this.formConfig['formLayout']
		};

		console.log('config', this.formComponentPrevData);


		setTimeout(() => {
			this.formComponentPrev = FormConstructorComponent;
		}, 1);
	}

	deleteControl(index: number) {
		this.controles[0].fields.splice(index, 1);
	}

	propertiesForm(value: any = {}) {
		this.formConfig = value;
		console.log('form: ', value);
		this.patchForm();
		this.generatePrevisualization();
	}

	previewForm(modalContent: any) {
		this._modal.open(modalContent, {ariaLabelledBy: 'modalPreview'});
		$('#modalFormPreview').modal('toggle');
	}
}

class PrevForm implements Formulario {

	table: string;
	formDefinition: Array<{label: string, fields: Field[]}>;
	getFormDefinition(): Array<{label: string, fields: Field[]}> {
		return this.formDefinition;
	}
}
