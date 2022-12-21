import Link from 'next/link';
import Image from 'next/image';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {SleepLog} from '../types/sleepLog';
import {Substance} from '../types/sleepLog';
import {Rating} from '../types/sleepLog';
import Modal from './Modal';
import { getLocalStorageEntries, setLocalStorageEntries } from '../utils/LocalStorageUtils';
import { removeSleepLog } from '../types/sleepLog';

const handleEntryDelete = (entry:SleepLog) => {
  const entries = getLocalStorageEntries();
  if (entries) {
    const entriesAfterDelete = removeSleepLog(entries, entry)
    setLocalStorageEntries(entriesAfterDelete);
  }
  
}


interface Props  {
    entry: SleepLog,
    onDelete?: ()=> void;
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
  if (rating != null ){
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

const EntryView = ( {entry, onDelete} : Props ) => {

    console.log("Rendering EntryView");
    //TODO fix how i get locale
    const locale : string =  "en-US";
    // const displayDate = entry.sleepDate?.toLocaleDateString(locale);
    const date = entry.sleepDate;
    let displayDate: string = "";
    if (date){
      displayDate = new Date(date).toDateString();
    }
    //TODO FIX substances types and input in form
    // let substancesJSX: JSX.Element = SubstancesContentCreator(entry.substances || []) || <></>;
    const [showModal, setShowModal] = useState(false);
    const modalProps = {
      shouldDisplay:showModal, title:"You're about to delete an entry.",body:"Are you sure you want to continue?",
            onClose:() => {
              setShowModal(false);
            },
            onContinue:() => {
              handleEntryDelete(entry);
              setShowModal(false);
              if(onDelete){
                onDelete();
              }
              
            }}
    return (
      
        <div className = "entryView">
            <section className="buttonSection ">
                <Link href="" >
                    <button className='buttonLink editButton' onClick={()=>{}}> Edit</button>
                </Link>
                  <button className='buttonLink deleteButton' onClick={()=>setShowModal(true)}> Delete</button>
            </section>
            { genericContentDisplay("Date: ", displayDate) }
            { genericContentDisplay("Bed time: ", entry.bedTime) }
            { genericContentDisplay("Actual time of sleep: " , entry.fallAsleepTime) } 
            
            { RatingDisplay(entry.sleepQuality ) }
            
            {/* {substancesJSX} */}
            {genericContentDisplay("Wake up time: ", entry.wakeUpTime)}

            { genericContentDisplay("Excercise: ", entry.excerciseDescription)}
            {genericContentDisplay("Additional comments: ", entry.comments)}

            <Modal {...modalProps}></Modal>
        </div>
    );

}

export default EntryView;