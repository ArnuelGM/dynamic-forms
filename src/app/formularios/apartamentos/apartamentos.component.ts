import { Component, OnInit, Input } from '@angular/core';
import { ApartamentosService } from './apartamentos.service';

@Component({
	selector: 'app-apartamentos',
	templateUrl: './apartamentos.component.html',
	styleUrls: ['./apartamentos.component.scss'],
	providers: [ApartamentosService]
})
export class ApartamentosComponent implements OnInit {

	@Input() title: string;
	@Input() formLayout: string = 'plain';
	@Input() columnsClass: string = 'col-12';

	constructor(
		public _formManager: ApartamentosService
	) { }

	ngOnInit() {
	}

}
