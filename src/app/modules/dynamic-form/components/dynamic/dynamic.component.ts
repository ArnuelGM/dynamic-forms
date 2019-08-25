import { Component, Input, OnChanges, ViewChild, ViewContainerRef, ComponentFactoryResolver, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-dynamic',
	template: '<ng-template #container></ng-template>'
})
export class DynamicComponent implements OnChanges {

	@Input() component: any;
	@Input() data: any;

	@ViewChild('container', { read: ViewContainerRef, static: true })
	container: ViewContainerRef;

	private simpleComponent: any;

	constructor(private resolver: ComponentFactoryResolver) {}

	ngOnChanges(changes: SimpleChanges) {
		this.loadComponent();
	}

	private loadComponent() {
		this.destroyComponent();
		this.buildComponent();
		this.setData();
	}

	private destroyComponent(){
		if (this.simpleComponent) {
			this.simpleComponent.destroy();
		}
	}

	private buildComponent() {
		this.container.clear();
		const factory = this.resolver.resolveComponentFactory(this.component);
		this.simpleComponent = this.container.createComponent(factory);
	}

	private setData() {
		Object.assign(this.simpleComponent.instance, this.data);
	}
}
