import { Formulario, ControlType } from '../modules/dynamic-form/interfaces';

export class InformacionGeneralDefinition implements Formulario {

	table: string;

	// mostrar el formulario con el layout 'tabs'
	formDefinition = [
		{
			label: 'Información General',
			fields: [
				{
					identification: '_id',
					name: '_id',
					controlType: ControlType.textbox,
					hidden: true
				},
				{
					identification: 'residential_name',
					name: 'residential_name',
					controlType: ControlType.textbox,
					label: 'Conjunto residencial',
					custom: {
						helpText: 'Nombre del conjunto residencial.'
					}
				},
				{
					identification: 'address',
					name: 'address',
					controlType: ControlType.textbox,
					label: 'Dirección',
					custom: {
						helpText: 'Dirección del conjunto.'
					}
				},
				{
					identification: 'city',
					name: 'city',
					controlType: ControlType.textbox,
					label: 'Ciudad',
					custom: {
						helpText: 'Nombre de la ciudad donde se encuentra ubicado el conjunto.'
					}
				},
				{
					identification: 'email',
					name: 'email',
					controlType: ControlType.textbox,
					type: 'email',
					label: 'Correo electrónico',
					custom: {
						helpText: 'Correo electrónico público.'
					}
				},
				{
					identification: 'phone',
					name: 'phone',
					controlType: ControlType.textbox,
					label: 'Teléfonos',
					custom: {
						helpText: 'Teléfonos públicos del conjunto.'
					}
				},
				{
					identification: 'schedule',
					name: 'schedule',
					controlType: ControlType.textbox,
					label: 'Horario',
					custom: {
						helpText: 'Horario de atencion al público.'
					}
				}
			]
		},
		{
			label: 'Archivos y Documentos',
			fields: [
				{
					identification: 'photo',
					name: 'photo',
					controlType: ControlType.file,
					label: 'Imagen principal',
					custom: {
						helpText: 'Imagen principal del conjunto.'
					}
				},
				{
					identification: 'internal_rules',
					name: 'internal_rules',
					controlType: ControlType.file,
					label: 'Reglamento interno',
					custom: {
						helpText: 'Reglamento interno del conjunto.'
					}
				},
			]
		}
	];

	getFormDefinition(): { label: string; fields: import("../modules/dynamic-form/interfaces").Field[]; }[] {
		return this.formDefinition;
	}


}
