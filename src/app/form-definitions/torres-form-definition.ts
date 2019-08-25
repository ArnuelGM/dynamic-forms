import { Formulario, Field, ControlType } from "src/app/modules/dynamic-form/interfaces";
import { Validators } from '@angular/forms';

export class TorresFormDefinition implements Formulario {

	table: 'Torres';

	formDefinition = [{
		label: 'Configuración de torres',
		fields: [
			{
				identification: '_id',
				name: '_id',
				controlType: ControlType.textbox,
				hidden: true
			},
			{
				identification: 'nombre',
				name: 'nombre',
				controlType: ControlType.textbox,
				label: 'Nombre',
				validations: [
					Validators.required,
					Validators.minLength(1)
				],
				custom: {
					helpText: 'Nombre de la torre.'
				}
			},
			{
				identification: 'numero_pisos',
				name: 'numero_pisos',
				controlType: ControlType.textbox,
				label: 'Número de pisos',
				type: 'number',
				validations: [
					Validators.required,
					Validators.min(1),
					Validators.minLength(1)
				],
				custom: {
					helpText: 'Número de pisos que tiene la torre.'
				}
			},
			{
				identification: 'footer_separator',
				controlType: ControlType.divider,
				colClass: 'col-12'
			}
		]
	}];

	getFormDefinition(): { label: string; fields: Field[]; }[] {
		return this.formDefinition;
	}


}
