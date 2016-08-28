import { customElement, bindable, inject } from 'aurelia-framework';
import CalendarModel from './CalendarModel';

@customElement('calendar-control')
export class Calendar {
    @bindable calendarModel : CalendarModel;
    isWeekView : boolean = false;
    // subscriber : any;

    constructor() {
    }

    attached() {        
        this.calendarModel = new CalendarModel('month');      
        // var that = this;
        // this.subscriber = this.ea.subscribe(CalendarModel.Events.changeView, view =>{
        //     that.calendarModel.View = view;
        //     that.isWeekView = view ==='week';
        // });
    }

    calendarModelChanged(newVal,oldVal){
        console.log("thisis hit");
    }

    detached() {
        // this.subscriber.dispose();
    }
}