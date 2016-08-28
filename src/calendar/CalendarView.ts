import moment from 'moment';
import CalendarModel from './calendarModel';
import {Definition,CalendarHelper} from './calendarHelper';

export default class CalendarView {
    days : Array<Definition>;
    months : Array<Definition>; 
    today: moment.Moment;
    constructor(){
        this.days = CalendarHelper.Days;
        this.months =CalendarHelper.Months;
        this.today = moment();
    }
}
