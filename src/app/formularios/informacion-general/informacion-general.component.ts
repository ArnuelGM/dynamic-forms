import { Component, OnInit, Input } from '@angular/core';
import { InformacionGeneralManagerService } from './informacion-general-manager.service';

@Component({
	selector: 'app-informacion-general',
	templateUrl: './informacion-general.component.html',
	styleUrls: ['./informacion-general.component.scss']
})
export class InformacionGeneralComponent implements OnInit {

	@Input() title: string;
	@Input() formLayout: string = 'linear';
	@Input() columnsClass: string = 'col-12 col-md-6';

	constructor(
		public _formManager: InformacionGeneralManagerService
	) { }

	ngOnInit() {
	}

}
