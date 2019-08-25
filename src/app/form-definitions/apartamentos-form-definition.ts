import { Formulario, Field, ControlType } from '../modules/dynamic-form/interfaces';

export class ApartamentosFormDefinition implements Formulario {

	table: string;

	formDefinition: { label: string; fields: Field[] }[] = [{
		label: 'Configuración de apartamentos',
		fields: [
			{
				identification: '_id',
				name: '_id',
				controlType: ControlType.textbox,
				hidden: true
			},
			{
				identification: 'torre_id',
				name: 'torre_id',
				controlType: ControlType.dropdown,
				label: 'Torre',
				options: [],
				custom: {
					helpText: 'Torre al que pertenece el apartamento.'
				}
			},
			{
				identification: 'numero',
				name: 'numero',
				controlType: ControlType.textbox,
				type: 'number',
				label: 'Número',
				custom: {
					helpText: 'Número del apartamento.'
				}
			},
			{
				identification: 'piso',
				name: 'piso',
				controlType: ControlType.textbox,
				type: 'number',
				label: 'Piso',
				custom: {
					helpText: 'Piso en el que se encuentra el apartamento.'
				}
			},
			{
				identification: 'numero_pisos',
				name: 'numero_pisos',
				controlType: ControlType.textbox,
				type: 'number',
				label: 'Número de pisos',
				custom: {
					helpText: 'Número de pisos del apartamento.'
				}
			},
			{
				identification: 'numero_alcobas',
				name: 'numero_alcobas',
				controlType: ControlType.textbox,
				type: 'number',
				label: 'Número de alcobas',
				custom: {
					helpText: 'Número de alcobas del apartamento.'
				}
			},
			{
				identification: 'numero_banios',
				name: 'numero_banios',
				controlType: ControlType.textbox,
				type: 'number',
				label: 'Número de baños',
				custom: {
					helpText: 'Número de baños del apartamento.'
				}
			},
			{
				identification: 'habitado',
				name: 'habitado',
				controlType: ControlType.radio,
				label: 'Está habitado?',
				inline: true,
				custom: {
					helpText: 'El apartamento está habitado actualmente?'
				},
				options: [
					{label: 'SI', value: 1, selected: false},
					{label: 'NO', value: 0, selected: false},
				]
			},
			{
				identification: 'footer_divider',
				controlType: ControlType.divider,
				colClass: 'col-12'
			}
		]
	}];

	getFormDefinition(): { label: string; fields: Field[]; }[] {
		return this.formDefinition;
	}


}
