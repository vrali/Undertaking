import {customElement, bindable, inject} from 'aurelia-framework';


@customElement('calendar')
@inject(Element)
export class Calendar{
    element : any;
    viewLabel: any;
    view: any;
    @bindable id = '';
    constructor(Element){
        this.element = Element;
        this.viewLabel= "August 2016";
        this.view = "view";
    }
    attached(){    
    }
} 