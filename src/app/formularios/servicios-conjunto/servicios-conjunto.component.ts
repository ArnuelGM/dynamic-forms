import { Component, OnInit, Input } from '@angular/core';
import { ServiciosConjuntoManagerService } from './servicios-conjunto-manager.service';

@Component({
	selector: 'app-servicios-conjunto',
	templateUrl: './servicios-conjunto.component.html',
	styleUrls: ['./servicios-conjunto.component.scss']
})
export class ServiciosConjuntoComponent implements OnInit {

	@Input() title: string;
	@Input() formLayout: string = 'plain';
	@Input() columnsClass: string = 'col-12 col-md-6';

	constructor(
		public _formManager: ServiciosConjuntoManagerService
	) { }

	ngOnInit() {
	}

}
