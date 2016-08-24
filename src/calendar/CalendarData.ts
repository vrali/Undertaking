

export default class CalendarData{
    
    constructor(public View) {
    }
    Schedule : Schedule[] ;
}
export enum Time {slotB,slotL,slotD}

export interface Schedule{
    time: Time;
    label: string;
    id: number;
} 