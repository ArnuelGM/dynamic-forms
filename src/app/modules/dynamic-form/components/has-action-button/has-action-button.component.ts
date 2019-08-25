import { Component, OnInit, Input } from '@angular/core';
import { FormManager } from '../../interfaces';

@Component({
  selector: 'has-action-button',
  templateUrl: './has-action-button.component.html',
  styleUrls: ['./has-action-button.component.scss']
})
export class HasActionButtonComponent {

	@Input() custom?: any;
	@Input() formManager?: FormManager;

}
