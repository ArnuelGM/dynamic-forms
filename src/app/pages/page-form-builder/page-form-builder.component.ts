import { Component, OnInit } from '@angular/core';
import { FormBuilderManagerService } from "../../components/form-builder/FormBuilderManagerService";
import { PageFormBuilderService } from './page-form-builder.service';

@Component({
	selector: 'app-page-form-builder',
	templateUrl: './page-form-builder.component.html',
	styleUrls: ['./page-form-builder.component.scss'],
	providers: [FormBuilderManagerService, PageFormBuilderService]
})
export class PageFormBuilderComponent implements OnInit {

	constructor(
		public _pageService: PageFormBuilderService
	) {}

	ngOnInit() {
		this._pageService.init();
	}

	ngOnDestroy() {
		this._pageService.controlConfigSubscription.unsubscribe();
		this._pageService.controlConfigSubscription.unsubscribe();
		this._pageService.addOptionSubscription.unsubscribe();
	}
}


