import { customElement, bindable, inject } from 'aurelia-framework';

@customElement('calendar-week-view')
export default class CalendarWeekView {
    @bindable view: string;
    constructor() {
    }


} 