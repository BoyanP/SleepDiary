
import {CalendarEntry} from "./calendarEntry";
export {}

export class CalendarContainer {


    daysWithEntries: CalendarEntry[];

    constructor(entryArray: CalendarEntry[] ) {

        this.daysWithEntries = entryArray;
    }
}