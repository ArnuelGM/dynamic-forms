import { Directive, ElementRef, OnInit, Input, OnDestroy } from '@angular/core';
import { Action, FormManager } from '../interfaces';

@Directive({
	selector: '[bindEvents]'
})
export class BindEventsDirective implements OnInit, OnDestroy {

	@Input() bindEvents: Array<Action>;
	@Input() formManager: FormManager;
	private listeners: Array<any> = [];

	constructor(private ref: ElementRef) {}

	ngOnInit() {
		if( this.bindEvents && this.bindEvents.length > 0 ) this.bind();
	}

	ngOnDestroy() {
		if( this.bindEvents && this.bindEvents.length > 0 ) this.unBind();
	}

	private bind() {
		this.bindEvents.forEach( (action:Action) => {
			const handler = this.formManager.listenEvent(action.managerHandlerEvent) || function(){};
			this.ref.nativeElement.addEventListener(
				action.eventName,
				this.listeners[ this.listeners.push(handler) -1 ]
			);
		});
	}

	private unBind() {
		this.bindEvents.forEach( (action:Action, index: number) => {
			this.ref.nativeElement.removeEventListener(action.eventName, this.listeners[index]);
		});
	}

}
