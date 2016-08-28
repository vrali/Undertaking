import moment from 'moment';

export class CalendarHelper {
    static Days = [
        { name: 'Sunday', shortName: 'Sun' },
        { name: 'Monday', shortName: 'Mon' },
        { name: 'Tuesday', shortName: 'Tue' },
        { name: 'Wednesday', shortName: 'Wed' },
        { name: 'Thursday', shortName: 'Thu' },
        { name: 'Friday', shortName: 'Fri' },
        { name: 'Saturday', shortName: 'Sat' }
    ];
    static Months = [
        { name: "January", shortName: 'Jan' },
        { name: "February", shortName: 'Feb' },
        { name: "March", shortName: 'Mar' },
        { name: "April", shortName: 'Apr' },
        { name: "May", shortName: 'May' },
        { name: "June", shortName: 'Jun' },
        { name: "July", shortName: 'Jul' },
        { name: "August", shortName: 'Aug' },
        { name: "September", shortName: 'Sep' },
        { name: "October", shortName: 'Oct' },
        { name: "November", shortName: 'Nov' },
        { name: "December", shortName: 'Dec' }
    ];
}

export class Month  {
    constructor(monthStartDate: moment.Moment) {
        this.weeks = [];
        var movingdate = moment(monthStartDate) as moment.Moment;
        movingdate.subtract(movingdate.day(), 'd')
        for (var index = 0; index < 6; index++) {
            this.weeks.push(new Week(movingdate));
            movingdate.add(7, 'd');
        }
    }
    weeks: Week[];
}

export class Week {
    constructor(startDate: moment.Moment) {
        this.days = [];
        var movingdate = moment(startDate) as moment.Moment;
        for (var index = 0; index < 7; index++) {
            this.days.push(new Day(movingdate));
            movingdate.add(1, 'd');
        }

    }
    days: Day[];
}

export class Day {
    date : moment.Moment;
    constructor(Date: moment.Moment) {
        this.date = moment(Date);
        this.dayOfWeek = CalendarHelper.Days[this.date.day()];
    }
    dayOfWeek: Definition;
}

export interface Definition {
    name: string;
    shortName: string;
} 