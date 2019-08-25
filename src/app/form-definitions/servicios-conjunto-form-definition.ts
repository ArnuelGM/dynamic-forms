import { Formulario, Field, ControlType } from '../modules/dynamic-form/interfaces';

export class ServiciosConjuntoDefinition implements Formulario {

	table: string;

	formDefinition = [
		{
			label: 'Configuración de Servicios del Conjunto',
			fields: [
				{
					identification: '_id',
					name: '_id',
					controlType: ControlType.textbox,
					label: 'Código',
					hidden: true,
				},
				{
					identification: 'name',
					name: 'name',
					controlType: ControlType.textbox,
					label: 'Nombre',
					custom: {
						helpText: 'Nombre del servicio'
					}
				},
				{
					identification: 'schedule',
					name: 'schedule',
					controlType: ControlType.textbox,
					label: 'Horario',
					custom: {
						helpText: 'Horario del servicio',
					}
				},
				{
					identification: 'description',
					name: 'description',
					controlType: ControlType.textarea,
					label: 'Descripción',
					custom: {
						helpText: 'Descripción del servicio / reglas de uso.'
					}
				},
				{
					identification: 'status',
					name: 'status',
					controlType: ControlType.radio,
					label: 'Estado',
					custom: {
						helpText: 'Estado del servicio'
					},
					options: [
						{label: 'Activo', value: 1, selected: false},
						{label: 'Inactivo', value: 0, selected: false},
					],
					inline: true
				},
				{
					identification: 'footer_divider',
					controlType: ControlType.divider,
					colClass: 'col-12'
				}
			]
		}
	];

	getFormDefinition(): { label: string; fields: Field[]; }[] {
		return this.formDefinition;
	}


}
