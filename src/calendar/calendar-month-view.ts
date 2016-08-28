import { customElement, bindable, inject } from 'aurelia-framework';
import CalendarView from './CalendarView';
import CalendarModel from './calendarModel';
import {Month} from './calendarHelper';
import moment from 'moment';

@customElement('calendar-month-view')
export default class CalendarMonthView extends CalendarView {
    @bindable data : CalendarModel;
    @bindable month : Month;
    constructor() {
        super();    
    }

    attached() {
        this.month = new Month(this.data.monthStartDate);         
    }
    dataChanged(newVal,oldVal){        
        if(oldVal)
        this.month = new Month(newVal.monthStartDate)
    }
}