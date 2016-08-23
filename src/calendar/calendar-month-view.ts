import { customElement, bindable, inject } from 'aurelia-framework';

@customElement('calendar-month-view')
export default class CalendarMonthView {
    @bindable view: string;
    constructor() {
    }

} 