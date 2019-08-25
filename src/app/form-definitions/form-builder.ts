import { Formulario, Field, ControlType } from '../modules/dynamic-form/interfaces';
import { Validators } from '@angular/forms';

export class FormBuilder implements Formulario {

	table: string;

	formDefinition: Array<{label: string, fields: Field[]}> = [

		// Propiedades del formulario
		{
			label: 'Propiedades del formulario',
			fields: [
				{
					controlType: ControlType.file,
					identification: 'file',
					name: 'file',
					label: 'Files',
					multiple: true
				},
				{
					controlType: ControlType.radio,
					identification: 'opt',
					name: 'opt',
					label: 'Opciones',
					options: [
						{label: 'opcion1', value: 'op1', selected: false},
						{label: 'opcion2', value: 'op2', selected: false},
						{label: 'opcion3', value: 'op3', selected: false},
						{label: 'opcion4', value: 'op4', selected: false},
						{label: 'opcion5', value: 'op5', selected: false}
					],
					inline: true,
					colClass: 'col-12',
					custom: {
						helpText: 'Selecciona una de las siguientes opciones.',
						errorText: 'Debes seleccionar una opción.'
					},
					validations: [Validators.required]
				},
				{
					controlType: ControlType.dropdown,
					name: 'formLayout',
					identification: 'formLayout',
					label: 'Layout',
					options: [
						{label: 'Plain', value: 'plain', selected: false},
						{label: 'Linear', value: 'linear', selected: false},
						{label: 'Side Panel', value: 'side_panel', selected: false},
						{label: 'Accordion', value: 'accordion', selected: false},
						{label: 'Tabs', value: 'tabs', selected: false},
					],
					inline: false,
					custom: {
						helpText: 'Tipo de organización de los componentes.',
						errorText: "Este campo es requerido."
					},
					validations: [Validators.required]
				},
				{
					controlType: ControlType.textbox,
					name: 'title',
					identification: 'title',
					label: 'Title',
					custom: {
						helpText: 'Título que tendrá el formulario.',
						errorText: "Este campo es requerido y no puede ser 'Formulario'."
					},
					validations: [
						Validators.required,
						function (control: any){
							const nameIsFormulario = (control.value && control.value.trim() == 'Formulario');
							return nameIsFormulario ? {'RestrinctionFormName': {value: control.value}} : null;
						}
					]
				},
				{
					controlType: ControlType.textbox,
					name: 'columnsClass',
					identification: 'columnsClass',
					label: 'Columns CSS Class',
					custom: {
						helpText: 'Número de columnas en que tendrá (Bootstrap).',
						errorText: 'Mínimo 3 y máximo 25 caracteres.'
					},
					validations: [Validators.minLength(3), Validators.maxLength(25)]
				},
				{
					controlType: ControlType.textbox,
					name: 'textSubmitButton',
					identification: 'textSubmitButton',
					label: 'Submit Text',
					custom: {
						helpText: 'Texto del botón de Submit.',
						errorText: 'Solo debe contener una sola palabra.'
					},
					validations: [
						function(control: any){
							const {value} = control;
							if( value && (<string>value).split(' ').length > 1 ){
								return {'OneWordValidation': {value}};
							}
							return null;
						}
					]
				},
				{
					controlType: ControlType.textbox,
					name: 'buttonSubmitClass',
					identification: 'buttonSubmitClass',
					label: 'Submit CSS',
					custom: {
						helpText: 'Clases CSS para el botón de Submit.'
					}
				},
				{
					controlType: ControlType.checkbox,
					name: 'enableSubmitManager',
					identification: 'enableSubmitManager',
					label: 'Enable Submit Manager',
					options: [
						{label: 'Habilitar', value: true, selected: false},
					],
					inline: true,
					// validations: [Validators.required, Validators.requiredTrue],
					custom: {
						helpText: 'Se debe enviar la acción de submit al FormManager?',
						errorText: 'Debe marcar este campo!!'
					}
				},
				{
					controlType: ControlType.divider,
					identification: 'footerActionsDividerSection1',
					colClass: 'col-12'
				},
				{
					controlType: ControlType.actions,
					identification: 'footerActionsSection1',
					colClass: 'col-12 d-flex justify-content-end pt-2',
					options: [
						{label: 'Nuevo', value: 'Nuevo', selected: false},
						{label: 'Guardar', value: 'Guardar', selected: false}
					],
					actions: [
						{eventName: 'click', managerHandlerEvent: 'resetForm'},
						{eventName: 'click', managerHandlerEvent: 'saveFormConfig'}
					],
					custom: {
						actionsClass: 'btn-group-sm',
						actionsConfiguration: [
							{class: 'btn-light', type: 'button'},
							{class: 'btn-primary', type: 'button'}
						],
					}
				}
			]
		},

		// Propiedades del control
		{
			label: 'Propiedades del control',
			fields: [
				{
					controlType: ControlType.textbox,
					identification: 'id',
					name: 'id',
					hidden: true
				},
				{
					controlType: ControlType.dropdown,
					name: 'controlType',
					identification: 'controlType',
					label: 'Control Type',
					options: [
						{label: 'Textbox' , value: 'textbox', selected: false},
						{label: 'Textarea' , value: 'textarea', selected: false},
						{label: 'Dropdown' , value: 'dropdown', selected: false},
						{label: 'Checkbox' , value: 'checkbox', selected: false},
						{label: 'Radio' , value: 'radio', selected: false},
						{label: 'File' , value: 'file', selected: false},
						{label: 'Divider' , value: 'divider', selected: false},
					],
					colClass: 'col-12',
					actions: [
						{eventName: 'change', managerHandlerEvent: 'controlTypeHandler'}
					],
					custom: {
						helpText: 'Tipo de control que se mostrará.'
					}
				},
				{
					controlType: ControlType.textbox,
					name: 'name',
					identification: 'name',
					label: 'Name Id',
					custom: {
						helpText: 'Identificador único para el control.'
					}
				},
				{
					controlType: ControlType.textbox,
					name: 'type',
					identification: 'type',
					label: 'Input Type',
					custom: {
						helpText: 'Tipo de input (exepto radio, checkbox, file).'
					}
				},
				{
					controlType: ControlType.textbox,
					name: 'label',
					identification: 'label',
					label: 'Label',
					custom: {
						helpText: 'Nombre de la etiqueta (título del control).'
					}
				},
				{
					controlType: ControlType.textbox,
					name: 'placeholder',
					identification: 'placeholder',
					label: 'Placeholder',
					custom: {
						helpText: 'Indicio para los controles escritos.'
					}
				},
				{
					controlType: ControlType.textbox,
					name: 'colClass',
					identification: 'colClass',
					label: 'Columns CSS Class',
					custom: {
						helpText: 'Columnas que ocupará el control (Bootstrap clases).'
					}
				},
				{
					controlType: ControlType.radio,
					name: 'hidden',
					identification: 'hidden',
					label: 'Hidden',
					colClass: 'col-6 col-md-3',
					inline: true,
					options: [
						{label: 'NO', value: false, selected: false},
						{label: 'SI', value: true, selected: false},
					],
					custom: {
						helpText: 'El campo se debe ocultar?',
						errorText: 'Debe seleccionar una opción!'
					},
					validations: [Validators.required]
				},
				{
					controlType: ControlType.radio,
					name: 'multiple',
					identification: 'multiple',
					label: 'Multiple',
					colClass: 'col-6 col-md-3',
					inline: true,
					hidden: true,
					options: [
						{label: 'NO', value: false, selected: false},
						{label: 'SI', value: true, selected: false},
					],
					custom: {
						helpText: 'El campo es de selección multiple?'
					}
				},
				{
					controlType: ControlType.radio,
					name: 'inline',
					identification: 'inline',
					label: 'Inline',
					colClass: 'col-6 col-md-3 col-lg-2',
					inline: true,
					hidden: true,
					options: [
						{label: 'NO', value: false, selected: false},
						{label: 'SI', value: true, selected: false},
					],
					custom: {
						helpText: 'La etiqueta irá al lado del control (Solo para radio y checkbox).'
					}
				},
				// DIVIDER
				{
					controlType: ControlType.divider, label: 'Agregar Opciones',
					colClass: 'col-12', hidden: true,
					identification: 'dividerAddOptions'
				},
				{
					controlType: ControlType.textbox,
					name: 'option_label',
					identification: 'option_label',
					label: 'Option Label',
					hidden: true,
					colClass: 'col-12 col-md-6',
					custom: {
						helpText: 'Etiqueta de la opción.'
					},
					validations: [Validators.required]
				},
				{
					controlType: ControlType.textbox,
					name: 'option_value',
					identification: 'option_value',
					hidden: true,
					colClass: 'col-12 col-md-6',
					label: 'Option Value',
					custom: {
						hasAction: true,
						hasActionOptions: {
							side: 'right',
							label: 'Agregar',
							class: 'btn-primary',
							action: {eventName: 'click', managerHandlerEvent: 'saveControlOption'}
						},
						helpText: 'Valor que tendrá cuando se seleccione.'
					},
					validations: [Validators.required]
				},
				{
					controlType: ControlType.divider,
					colClass: 'col-12', identification: 'footerActionsDividerSection2'
				},
				{
					controlType: ControlType.actions,
					identification: 'footerActionsSection2',
					colClass: 'col-12 d-flex justify-content-end pt-2',
					options: [
						{label: 'Emitir', value: '', selected: false},
						{label: 'Nuevo', value: 'Nuevo', selected: false},
						{label: 'Guardar', value: 'Guardar', selected: false}
					],
					actions: [
						{eventName: 'click', managerHandlerEvent: 'emitirValor'},
						{eventName: 'click', managerHandlerEvent: 'resetForm'},
						{eventName: 'click', managerHandlerEvent: 'saveControlConfig'}
					],
					custom: {
						actionsClass: 'btn-group-sm',
						actionsConfiguration: [
							{class: 'btn-light', type: 'button'},
							{class: 'btn-secondary', type: 'button'},
							{class: 'btn-primary', type: 'button'}
						],
					}
				}
			]
		}
	];

	getFormDefinition(): Array<{label: string, fields: Field[]}> {
		return this.formDefinition;
	}

}
