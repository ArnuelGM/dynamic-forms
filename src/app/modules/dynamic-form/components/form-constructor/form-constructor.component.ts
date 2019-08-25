import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	AfterViewInit,
} from '@angular/core';
import { FormConstructorService } from './form-constructor.service';
import { FormGroup } from '@angular/forms';
import { FormResponse, FormManager } from '../../interfaces';
import { Subscription } from 'rxjs';
import { PlainLayoutComponent } from '../form-layouts/plain-layout/plain-layout.component';
import { LinearLayoutComponent } from '../form-layouts/linear-layout/linear-layout.component';
import { AccordionLayoutComponent } from '../form-layouts/accordion-layout/accordion-layout.component';
import { SidePanelLayoutComponent } from '../form-layouts/side-panel-layout/side-panel-layout.component';
import { TabsLayoutComponent } from '../form-layouts/tabs-layout/tabs-layout.component';

@Component({
	selector: 'app-form-constructor',
	templateUrl: './form-constructor.component.html',
	styleUrls: ['./form-constructor.component.scss'],
	providers: [FormConstructorService]
})
export class FormConstructorComponent implements OnInit, AfterViewInit {

	// Definición de los campos del formulario
	@Input() formManager: FormManager;
	// Tipo de layout del formulario (PlainLayout por defecto)
	@Input() formLayout: any = 'plain';
	// Diccionario de los posibles layouts que se pueden representar dentro del formulario
	@Input() formLayoutDict?: any;
 	// Emisor de eventos
	@Output() submit: EventEmitter<FormResponse> = new EventEmitter<FormResponse>();

	// Identificador unico del formulario
	@Input() _id: string;
	// Titulo de del formulario
	@Input() title: string;
	// A cuantas columnas se deben mostrar los campos
	@Input() columnsClass: string = 'col-12';
	// Controa si se debe mostrar el boton de submit
	@Input() showSubmitButton?: boolean = true;
	// Define si se debe enviar el evento submit a la funcion submit del manejador del formulario
	@Input() enableSubmitManager?: boolean = true;
	// Texto del botón Enviar
	@Input() textSubmitButton?: string = 'Submit';
	// Clase css que se aplicará al botón de enviar
	@Input() buttonSubmitClass: string = 'btn-primary';

	// Representación de los datos del formulario
	public formGroup: FormGroup;
	public formElement: HTMLFormElement;

	@Input() devMode: boolean;

	constructor(private _formConstructorService: FormConstructorService) {}

	ngOnInit() {
		this.formGroup = this._formConstructorService.toFormGroup(
			this.formManager.formClassDefinition.getFormDefinition()
		);
		this.formManager.formGroup = this.formGroup;
	}

	ngAfterViewInit () {
		this.formElement = <HTMLFormElement> document.querySelector(`form[id=${this._id}]`);
		this.formManager.formElement = this.formElement;
	}

	handlerSubmit(e: Event) {
		e.preventDefault();
		// Se construyen los datos a ser emitidos
		const formResponse = {
			formElement: <HTMLFormElement>e.target,
			ngForm: this.formGroup
		};

		// Se emiten los datos del formulario
		this.submit.emit(formResponse);

		// Se envian los datos a la funcion submit del manejador
		// del formulario solo cuando se haya solicitado en el input
		//  del componente <form-constructor [enableSubmitManager]="true"></form-constructor>
		if (this.enableSubmitManager) {
			this.formManager.submit(formResponse);
		}
	}

	// GETTERS
	get _formLayout() {
		const mapLayouts = {
			'plain': PlainLayoutComponent,
			'linear': LinearLayoutComponent,
			'accordion': AccordionLayoutComponent,
			'side_panel': SidePanelLayoutComponent,
			'tabs': TabsLayoutComponent
		};
		this.formLayoutDict = {...mapLayouts, ...this.formLayoutDict};
		return this.formLayoutDict
				? this.formLayoutDict[this.formLayout] || PlainLayoutComponent
				: PlainLayoutComponent;
	}
}
