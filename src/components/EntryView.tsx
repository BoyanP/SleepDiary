import Image from 'next/image';
import React from 'react';

import {SleepLog} from '../types/sleepLog';
import {Substance} from '../types/sleepLog';
import {Rating} from '../types/sleepLog';



interface Props  {
    entry: SleepLog
}

const genericContentDisplay = ( prefix: string, info?: string ): JSX.Element => {

  const infoToDisplay = info || null;
  const infoDisplay = info ?  <p> {prefix  + infoToDisplay}</p> : <></>;
  return (
    <div>
     {infoDisplay}
    </div>
  );
}


const SubstancesContentCreator = (substances: [Substance,string][]): JSX.Element => {
  return (
    <div>
        {
            substances.map( (substance, index) => {
              const substanceString = " Type: " + substance[0];
              const desc = substance[1]; 
              return (
                  
                  <div key={substance[1]+index}>
                    <div>
                      {substanceString}
                    </div>
                    <div>
                      {desc}
                    </div>
                  </div>
                );
            })
          }
          

    </div>
  );
}

const RatingDisplay = (rating?: Rating): JSX.Element => {
  console.log("do I come here???", rating)
  if (rating != null ){

    console.log("rating",rating)
    const rows: number[] = [];
    for(let i = 0; i < rating; i++) {
      rows.push(rating);
    }
    return (
      <div>
        <span> {"Sleep Quality: "}</span>
         {
                      rows.map((row)=> {
                return (
                    <>
                        <Image   
                        src="/starIcon.svg" // Route of the image file
                        height={16} // Desired size with correct aspect ratio
                        width={16} // Desired size with correct aspect ratio
                        alt="star rating">

                        </Image>
                    </>
                );
            })
            
            }
      </div>
    );

  }
  
  else {
    return (<></>);
  }
}

const EntryView = ( {entry} : Props ) => {


    //fix how i get locale
    const locale : string =  "en-US";
    // const displayDate = entry.sleepDate?.toLocaleDateString(locale);
    const displayDate = entry.sleepDate;
    // let substancesJSX: JSX.Element = SubstancesContentCreator(entry.substances || []) || <></>;

    return (
      
        <div className = "entryView">
            
            { genericContentDisplay("Date: ", displayDate) }
            { genericContentDisplay("Bed time: ", entry.bedTime) }
            { genericContentDisplay("Actual time of sleep: " , entry.fallAsleepTime) } 
            
            { RatingDisplay(entry.sleepQuality ) }
            
            {/* {substancesJSX} */}
            {genericContentDisplay("Wake up time: ", entry.wakeUpTime)}

            { genericContentDisplay("Excercise description: ", entry.excerciseDescription)}
            {genericContentDisplay("Additional comments: ", entry.comments)}

        </div>
    );

}

export default EntryView;