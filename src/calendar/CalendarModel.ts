import moment from 'moment';

export default class CalendarModel {
    static Events = {
        changeView: 'calendar: changeView',
        changePage: 'calendar: changePage',
        jumpToToday:'calendar: jumpToToday'
    };
    private _date : moment.Moment;
    get date(): moment.Moment {
        return this._date;
    }
    set date(value: moment.Moment) {
        this._date = value;
        this.weekStartDate =  moment(value).subtract(value.day(),'d');
        this.monthStartDate =  moment(value).subtract(value.date()-1,'d');
    }
    weekStartDate : moment.Moment;
    monthStartDate: moment.Moment;
    constructor(public View : string = 'month', Date :moment.Moment = moment()) {          
        this.date = Date;          
    }

    private _Schedule: Schedule[];
    get Schedule(): Schedule[] {
        return this._Schedule;
    }  
}
export enum Time { slotB, slotL, slotD }

export class Schedule {
    time: Time;
    label: string;
    date: moment.Moment;
} 


