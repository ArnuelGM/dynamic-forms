import { Field } from './Field';

export interface Formulario {
	table: string;
	formDefinition: Array<{label: string, fields: Field[]}>;
	getFormDefinition(): Array<{label: string, fields: Field[]}>;
}
