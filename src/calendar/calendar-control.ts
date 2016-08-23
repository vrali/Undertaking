import { customElement, bindable, inject } from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import CalendarModel from './calendarData';

@customElement('calendar-control')
@inject(EventAggregator)
export class Calendar {
    @bindable calendarModel : CalendarModel;
    isWeekView : boolean = false;
    ea: EventAggregator;
    subscriber : any;

    constructor(eventAggregator) {
        this.calendarModel = new CalendarModel('month');
        this.ea = eventAggregator;        
    }

    attached() {
        var that = this;
        this.subscriber = this.ea.subscribe('calendar: viewChanged', view =>{
            that.calendarModel.View = view;
            that.isWeekView = view ==='week';
        });
    }

    detached() {
        this.subscriber.dispose();
    }
}