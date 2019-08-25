import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TorresComponent } from './torres/torres.component';
import { DynamicFormModule } from '../modules/dynamic-form/dynamic-form.module';
import { ApartamentosComponent } from './apartamentos/apartamentos.component';
import { ServiciosConjuntoComponent } from './servicios-conjunto/servicios-conjunto.component';
import { InformacionGeneralComponent } from './informacion-general/informacion-general.component';

@NgModule({
	declarations: [
		TorresComponent,
		ApartamentosComponent,
		ServiciosConjuntoComponent,
		InformacionGeneralComponent
	],
	imports: [
		CommonModule,
		DynamicFormModule
	],
	exports: [
		TorresComponent,
		ApartamentosComponent,
		ServiciosConjuntoComponent,
		InformacionGeneralComponent
	]
})
export class FormulariosModule { }
