import { ControlType } from './ControlType';
import { Action } from './Action';

export interface Field {
	value?: any;
	custom?: any;
	name?: string;
	type?: string;
	label?: string;
	hidden?: boolean;
	inline?: boolean;
	colClass?: string;
	disabled?: boolean;
	multiple?: boolean;
	readonly?: boolean;
	placeholder?: string;
	identification: string;
	actions?: Array<Action>;
	options?: Array<Option>;
	controlType: ControlType;
	validations?: Array<any>;
}

export type Option = {
	label: string;
	value: any;
	selected?: boolean;
}

/**
	# custom

	## helpText: <string> 
	texto de ayuda que se mostrara debajod del elemento de formulario y que sirve para indicarle al usuaio la utilidad del campo.

	## errorText: <string>
	texto de error que se mostrara cuando el elemento del formulario no sea valido. se mostrará unicamente cuando el usuario haya hecho alguna accion sobre el elemento.

	## divContentClass: <string>
	clase css que se aplicara al contenedor del elemento de formulario para definir estilos visuales.

	## actionsClass: <string>
	clase css que se aplicara exclusivamente al contenedor del elemento 'Actions' para definir estilos visuales.
	actionsClass solo tendra efecto en el elelemnto de tipo actions 

	## actionsConfiguration: <Array<{class?: string, type?:string, disabled:? boolean, [...]}>>
	un arreglo de objetos de configuracion que se aplicaran a los elementos tipo 'Action'. se aplicaran las configuraciones en el mismo orden 
	que se declaren las opciones en la configuracion del field.
	actionsClass solo tendra efecto en el elelemnto de tipo actions 

	## hasActions: <boolean>
	una propiedad que indica si el elemento del formulario debe llevar botones a los lados.
	hasActionsOptions solo tendra efecto en elementos de tipo textbox, dropdown y file

	## hasActionsOptions: <{side: 'left'|'right', class?: string, action: Action}>
	un objeto de configuracion que permite describir la posicion (side), clase css (class) y accion a ejecutar (action) del boton de accion del elelemento de formulario.
	hasActionsOptions solo tendra efecto en elementos de tipo textbox, dropdown y file
 */