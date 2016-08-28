import { customElement, bindable, inject } from 'aurelia-framework';
import CalendarView from './CalendarView';
import CalendarModel from './calendarModel';
import {Week} from './calendarHelper';
import * as moment from 'moment';

@customElement('calendar-week-view')
export default class CalendarWeekView extends CalendarView {
    @bindable data : CalendarModel;
    @bindable week : Week;
      constructor() {
        super();
    }

    attached() {
        // this.week = new Week(this.data.monthStartDate);         
    }
    dataChanged(newVal,oldVal){
        // if(!oldVal)
        // this.week = new Week(newVal.monthStartDate)
    }
} 