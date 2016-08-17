import {customElement, bindable, inject} from 'aurelia-framework';


@customElement('calendar-view')
@inject(Element)
export class Calendar{
    element : any;
    viewLabel: any;
    @bindable id = '';
    constructor(Element){    
    }
    getViewStrategy() {
        return 'calendarMonthView.html';
    }
    attached(){    
    }
} 