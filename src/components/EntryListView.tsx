import React from 'react';
import {SleepLog} from '../types/sleepLog';
import AddEntry from './AddEntry';
import EntryView from './EntryView';
import AppContext, {useAppContext} from './AppContext';

interface Props  {
    entryList: SleepLog[] | undefined
}

const EntryListView = () => {
    let entryList = useAppContext();
    console.log("list",entryList)
    let sortedEntries: SleepLog[] = [];
    if (entryList){
    sortedEntries = entryList.sort((a,b)=> {
            if (a.sleepDate !== undefined && b.sleepDate !== undefined) {

                // if ( a.sleepDate?.toISOString > b.sleepDate?.toISOString ) {
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
        
        <section className="entryListView">
            <AddEntry key={"AddButton"}></AddEntry>
            {
                      sortedEntries.map((entry)=> {
                return (
                    <>
                        <EntryView entry = {entry} key={entry._id}></EntryView>
                    </>
                );
            })
            
            }
            
        </section>
    );


}

export default EntryListView; 