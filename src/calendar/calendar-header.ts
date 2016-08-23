import { bindable, inject } from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Element, EventAggregator)
export class CalendarHeaderCustomElement {
    element: any;
    viewLabel: any;
    ea : EventAggregator;
    @bindable view: string;

    constructor(Element, EventAggregator) {
        this.element = Element;
        this.viewLabel= "August 2016";
        this.ea = EventAggregator ;
    }

    changeView(view:string)
    {
        this.ea.publish('calendar: viewChanged',view);
    }
}