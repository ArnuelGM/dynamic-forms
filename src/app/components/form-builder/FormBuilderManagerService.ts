import { Injectable } from '@angular/core';
import { FormManager, Formulario, FormResponse, Option, FieldComponent } from 'src/app/modules/dynamic-form/interfaces';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormBuilder } from 'src/app/form-definitions/form-builder';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

@Injectable()
export class FormBuilderManagerService implements FormManager {

	// Implementacion de la Interface FormManager
	public formGroup: FormGroup;
	public formElement: HTMLFormElement;
	public formClassDefinition: Formulario = new FormBuilder();

	public $valueSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
	public valueEmitter = this.$valueSubject.asObservable();

	public fieldsComponents: {[key:string]:FieldComponent} = {};

	// Propiedades Adicionales
	public $formConfigSubject = new BehaviorSubject<any>(null);
	public $controlConfigSubject = new BehaviorSubject<any>(null);

	public onFormConfig = this.$formConfigSubject.asObservable();
	public onControlConfig = this.$controlConfigSubject.asObservable();

	private $addControlOption = new BehaviorSubject<Option>(null);
	public onAddControlOption = this.$addControlOption.asObservable();

	constructor(){}

	submit(response: FormResponse) { }

	setValue(value: any): void {
		this.formGroup.patchValue(value);
		this.$valueSubject.next(value);
	}

	listenEvent(eventName: string) {
		if(eventName in this){
			return (event: Event) => {
				this.$valueSubject.next({
					eventName: eventName,
					data: this[eventName](event)
				});
			};
		}
		else return _.noop;
	}

	// *********************************** //
	// ********** EVENT LISTENERS ******** //
	// *********************************** //

	saveFormConfig(event: Event) {
		const {formLayout,title,textSubmitButton,buttonSubmitClass, columnsClass, enableSubmitManager, opt} = this.formGroup.controls;
		const validGroup = [formLayout,title,textSubmitButton,buttonSubmitClass, columnsClass, enableSubmitManager, opt];
		const validation = this.validateGroup(validGroup);
		if( !validation.valid ) {
			alert('Debe llenar el formulario correctamente.');
			return;
		}
		const value = {
			formLayout: formLayout.value ,
			title: title.value,
			textSubmitButton: textSubmitButton.value,
			buttonSubmitClass: buttonSubmitClass.value,
			columnsClass: columnsClass.value,
			enableSubmitManager: enableSubmitManager.value
		};
		this.$formConfigSubject.next(value);
	}

	saveControlConfig(event: Event) {
		const {id, controlType, name, type, label, placeholder, colClass, hidden, multiple, inline} = this.formGroup.value;
		this.$controlConfigSubject.next({id, controlType, name, type, label, placeholder, colClass, hidden, multiple, inline});
	}

	saveControlOption(event: any) {

		const {option_label, option_value} = this.formGroup.controls;
		const group = [option_label, option_value];
		const validation = this.validateGroup(group);
		if(!validation.valid){
			let msg = 'Los siguientes campos son requeridos.\n';
			msg += 'Option Label\n';
			msg += 'Option Value';
			alert(msg);
			return;
		}
		this.$addControlOption.next({ label: option_label.value, value: option_value.value, selected: false });
	}

	resetForm(event: Event) {
		this.formGroup.reset();
	}

	// Listen on controlType[change]
	controlTypeHandler(event: any) {

		const {value} = event.target;
		const activarMultiple = value == 'dropdown';
		const activarInline = value == 'radio' || value == 'checkbox';
		const activarAgregarOpciones = activarInline || activarMultiple;

		// activar agregar opciones
		this.fieldsComponents.dividerAddOptions.field.hidden = !activarAgregarOpciones;
		this.fieldsComponents.option_label.field.hidden = !activarAgregarOpciones;
		this.fieldsComponents.option_value.field.hidden = !activarAgregarOpciones;
		// activar multiple
		this.fieldsComponents.multiple.field.hidden = !activarMultiple;
		// activar inline
		this.fieldsComponents.inline.field.hidden = !activarInline;

	}

	emitirValor(event: any){
		const { field} = this.fieldsComponents.controlType;
		field.colClass = "col-12 col-md-6";
		field.options.push({label: 'ACTIONS', value: 'actions', selected: false});
	}

	validateGroup(group: Array<AbstractControl>) {
		let control: AbstractControl = null;
		const valid = group.every( c => {
			const {valid} = c;
			if( !valid ) {debugger; control = c;}
			return valid;
		});
		return { valid, control };
	}

}
