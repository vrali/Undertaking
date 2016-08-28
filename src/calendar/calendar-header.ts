import { bindable, inject } from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import CalendarModel from './CalendarModel';
import moment from 'moment';

@inject(Element)
export class CalendarHeaderCustomElement {
    element: any;
    viewLabel: any;
    @bindable data: CalendarModel;

    constructor(Element) {
        this.element = Element;
        this.viewLabel= "August 2016";
    }

    changeView(view:string)
    {
        this.data.View = view;        
    }

    changePage(){
        this.data.date = moment(this.data.date).add(1,this.data.View as moment.UnitOfTime);
    }
}