import {useRouter} from 'next/router'
import {useRef,useEffect ,useState} from "react";
import { SleepLog } from "../types/sleepLog";
import { Rating } from '../types/sleepLog';
import { FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { setAppContext } from './AppContext';



const getRating = (userInput: string):Rating  => {

        let sleepQualityValue = userInput;
        if( sleepQualityValue ){
            let qualityAsInt = parseInt(sleepQualityValue);
            if (qualityAsInt){
                switch(qualityAsInt){
                    case 1:
                        return Rating.oneStar;
                    case 2: 
                        return Rating.twoStar;
                    case 3: 
                        return Rating.threeStar;
                    case 4: 
                        return Rating.fourStar;
                    case 5: 
                        return Rating.fiveStar;
                    default:
                        return Rating.none;
                }
            }
            
        }

    return Rating.none;
}


/*
this is the form that adds entries to the sleep diary.
after the state is updated, useEffect is used on SleepLog to update the entries in local storage. 
 */
const SleepForm = ( props: SleepLog) => {
    const firstUpdate = useRef(0);
    const router = useRouter();

    let [sleepLog, useSleepLog] = useState<SleepLog>({
        _id:uuidv4(Date.now()),
        sleepDate:"",
        bedTime:"",
        fallAsleepTime:"",
        comments:"",
        excerciseDescription:"",
        sleepInteruptions:"",
        sleepQuality: Rating.none,
        wakeUpTime:"",
        substances:""

    });
    useEffect (() => {

        if ( firstUpdate.current < 2 ){
            firstUpdate.current += 1 ;
            console.log("updated firstUpdate", firstUpdate.current)
            return;
        }else {
            const sleepEntries = localStorage.getItem('sleepLogEntries');
            let sleepDiaryEntries: SleepLog[] = [];
            if (sleepEntries != null){
                sleepDiaryEntries = JSON.parse(sleepEntries);
            }
            if(sleepLog != null ) {
                sleepDiaryEntries.push(sleepLog);
            }
            localStorage.setItem('sleepLogEntries', JSON.stringify(sleepDiaryEntries));
            router.push({
                pathname: "/"
            });
        }
    },[sleepLog]);

    
    const sleepDateInputElement = useRef<HTMLInputElement>(null);
    const bedTimeElement = useRef<HTMLInputElement>(null);
    const fallAsleepTimeElement = useRef<HTMLInputElement>(null);
    const commentsElement = useRef<HTMLInputElement>(null);
    const sleepQualityElement = useRef<HTMLInputElement>(null);
    const excerciseDescriptionElement = useRef<HTMLInputElement>(null);
    const sleepInteruptionsElement = useRef<HTMLInputElement>(null);
    const wakeUpTimeElement = useRef<HTMLInputElement>(null);
    const substancesElement = useRef<HTMLInputElement>(null);


    const handleSubmit = (e:FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        
        let sleepQuality: Rating = getRating( sleepDateInputElement.current?.value || "");
        useSleepLog({
            _id: sleepLog._id,
            sleepDate: sleepDateInputElement.current?.value || "",
            bedTime : bedTimeElement.current?.value || "",
            sleepQuality: sleepQuality,
            fallAsleepTime: fallAsleepTimeElement.current?.value || "",
            wakeUpTime: wakeUpTimeElement.current?.value || "",
            substances:substancesElement.current?.value || "",
            comments: commentsElement.current?.value || "",
            sleepInteruptions: sleepDateInputElement.current?.value || "",
            excerciseDescription: excerciseDescriptionElement.current?.value || ""
        });
    }
   

    return (
        <div className="sleepForm">
            <form method="post" className="entryForm" onSubmit={handleSubmit}>
                <div>
                    <label>Select a date </label>
                    <input ref={sleepDateInputElement}  name="sleepDate" type="date"></input>
                </div>
                <div>
                    <label> What time did you go to bed? </label>
                    <input name="bedTime" ref={bedTimeElement}></input>
                </div>
                <div>
                    <label>What time did you fall asleep?</label>
                    <input name="fallAsleepTime" ref={fallAsleepTimeElement}></input>
                </div>
                <div>
                    <label>When did you wake up? </label>
                    <input name="wakeUpTime" ref={wakeUpTimeElement}></input>
                </div>
                <div>
                    <label>Rate the quality of your sleep: </label>
                    <input name="sleepQuality" ref={sleepQualityElement}></input>               
                </div>
                <div>
                    <label> Were there any interuptions to your sleep?</label>
                    <input name="sleepInteruptions" ref={sleepInteruptionsElement}></input>              
                </div>
                <div>
                    <label>Which substances did you consume during the day?</label>
                    <input name="substances" ref ={substancesElement}></input>
                </div>
                <div>
                    <label> Did you excercise on this date?</label>
                    <input name="excerciseDescription" ref={excerciseDescriptionElement}></input>               
                </div>
                <div>
                    <label> Other comments: </label>
                    <input name="comments" ref={commentsElement}></input>
                </div>

                <button type="submit"> Submit</button>
            </form>
        </div>

    );
}



export default SleepForm;