import React from 'react';
import {SleepLog} from '../types/sleepLog';
import EntryView from './EntryView';

interface Props  {
    entryList: SleepLog[]
}

const EntryListView = ({entryList} : Props) => {

    const sortedEntries = entryList.sort((a,b)=> {
        if (a.sleepDate !== undefined && b.sleepDate !== undefined) {

            if ( a.sleepDate?.toISOString > b.sleepDate?.toISOString ) {
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
  
    return(
        <section className="entryListView">
            {
                      sortedEntries.map((entry)=> {
                return (
                    <EntryView entry = {entry}></EntryView>
                );
            })
            
            }
            
        </section>
    );


}

export default EntryListView; 