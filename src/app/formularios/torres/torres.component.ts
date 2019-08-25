import { Component, OnInit, Input } from '@angular/core';
import { TorresFormManager } from './torres-manager';

@Component({
	selector: 'app-torres-form',
	templateUrl: './torres.component.html',
	styleUrls: ['./torres.component.scss'],
	providers: [TorresFormManager]
})
export class TorresComponent implements OnInit {

	@Input() title: string;
	@Input() formLayout: string = 'plain';
	@Input() columnsClass: string = 'col-12';

	constructor(
		public _formManager: TorresFormManager
	) { }

	ngOnInit() {
	}

}
