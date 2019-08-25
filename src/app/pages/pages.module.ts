import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormModule } from '../modules/dynamic-form/dynamic-form.module';
import { CardComponent } from '../components/card/card.component';
import { PageFormBuilderComponent } from './page-form-builder/page-form-builder.component';
import { FormsModule } from '@angular/forms';
import { TorresComponent } from '../formularios/torres/torres.component';
import { FormTestComponent } from './form-test/form-test.component';
import { FormulariosModule } from '../formularios/formularios.module';

@NgModule({
	declarations: [
		CardComponent,
		PageFormBuilderComponent,
		FormTestComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		FormulariosModule,
		DynamicFormModule
	],
	exports: [
		PageFormBuilderComponent,
		FormTestComponent
	]
})
export class PagesModule {}
