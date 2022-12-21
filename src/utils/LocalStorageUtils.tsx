import { SleepLog } from "../types/sleepLog"


const getLocalStorageEntries = function():SleepLog[] {
    const sleepEntries = localStorage.getItem('sleepLogEntries');
    let sleepDiaryEntries: SleepLog[] = [];
    if (sleepEntries != null){
        sleepDiaryEntries = JSON.parse(sleepEntries);
        return sleepDiaryEntries;
    }
    
    return [];
}

const setLocalStorageEntries = function(entries: SleepLog[]):void {
    console.log("setting local Storage entries", entries);
    localStorage.setItem('sleepLogEntries', JSON.stringify(entries));
    dispatchEvent( new Event('storage') );
}


export{ getLocalStorageEntries , setLocalStorageEntries};
