import React, {useEffect, useState} from 'react';
import {SleepLog, removeSleepLog} from '../types/sleepLog';
import AddEntry from './AddEntry';
import EntryView from './EntryView';
import AppContext, {useAppContext} from './AppContext';
import { setLocalStorageEntries } from '../utils/LocalStorageUtils';

interface Props  {
    entryList: SleepLog[] | undefined
}

const EntryListView = () => {
    let entryList = useAppContext();
    // const[entries, setEntries] = useState(entryList);
    useEffect(()=>{
        //TODO rerender
    },[entryList]);
    console.log("list",entryList)
    let sortedEntries: SleepLog[] = [];
    if (entryList){
    sortedEntries = entryList.sort((a,b)=> {
            if (a.sleepDate !== undefined && b.sleepDate !== undefined) {

                if ( a.sleepDate > b.sleepDate ) {
                    return -1;
                }
                if (a.sleepDate === b.sleepDate ) {
                    return 0;
                }

                if( a.sleepDate < b.sleepDate ){
                    return 1;
                }
            }
            return 0;
        });
    }
    return(
        
        <section className="entryListView" key={"listView"}>
            <AddEntry key={"AddButton"}></AddEntry>
            {
                      sortedEntries.map((entry)=> {
                return (
                    <>
                        <EntryView entry={entry} onDelete={()=>{setLocalStorageEntries(removeSleepLog(sortedEntries,entry))}} key={entry.id}></EntryView>
                    </>
                );
            })
            
            }
            
        </section>
    );


}

export default EntryListView; 