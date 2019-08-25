import { Injectable } from '@angular/core';
import { TextboxFieldComponent } from '../fields/textbox-field/textbox-field.component';
import { TextareaFieldComponent } from '../fields/textarea-field/textarea-field.component';
import { DropdownFieldComponent } from '../fields/dropdown-field/dropdown-field.component';
import { RadioFieldComponent } from '../fields/radio-field/radio-field.component';
import { FileFieldComponent } from '../fields/file-field/file-field.component';
import { GroupDividerComponent } from '../group-divider/group-divider.component';
import { ActionsFieldComponent } from '../fields/actions-field/actions-field.component';
import { CheckboxFieldComponent } from '../fields/checkbox-field/checkbox-field.component';

@Injectable()
export class FormFieldFabricService {

	fields = {
		file: FileFieldComponent,
		radio: RadioFieldComponent,
		textbox: TextboxFieldComponent,
		dropdown: DropdownFieldComponent,
		textarea: TextareaFieldComponent,
		divider: GroupDividerComponent,
		actions: ActionsFieldComponent,
		checkbox: CheckboxFieldComponent
	};

	fabricComponent(type: string): any {
		return  this.fields[type] || null;
	}

	assing(...data) {
		return Object.assign({}, ...data);
	}

}
