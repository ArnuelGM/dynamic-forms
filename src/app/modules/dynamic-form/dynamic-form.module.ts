import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Components } from './components';
import { FormConstructorService } from './components/form-constructor/form-constructor.service';
import { BindEventsDirective } from './directives/bind-events.directive';

@NgModule({
	declarations: [Components, BindEventsDirective],
	entryComponents: [Components],
	imports: [
		CommonModule,
		NgbModule,
		ReactiveFormsModule
	],
	providers: [FormConstructorService],
	exports: [Components]
})
export class DynamicFormModule {}
