import React, {ReactElement} from 'react';
import {SleepLog} from '../types/sleepLog';
import {Substance} from '../types/sleepLog';


interface Props  {
    entry: SleepLog
}

const EntryView = ( {entry} : Props ) => {


    //fix how i get locale
    const locale : string =  "en-US";
    const displayDate = entry.sleepDate?.toLocaleDateString(locale);
    
    return (
      
        <div className = "entryView">
            
            <p>{"Date: " + displayDate}</p>
            <p>{"Rating: " + entry.sleepQuality}</p>
            <p> {"Substances: "}</p>
            <p> {"Excercise description: " + entry.excerciseDescription}</p>
            <p> {"Additional comments: " + entry.comments}</p>
        </div>
    );

}


const SubstancesContentCreator: React.FC = (substances: [Substance,string][]): ReactElement => {
  return (
    <div>
        {
            substances.map( (substance) => {
                return (
                  <div> </div>
                );
            })
          }
          

    </div>
  );

export default EntryView;