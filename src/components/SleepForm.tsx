import {useRouter} from 'next/router'
import React, {useRef,useEffect ,useState, ComponentLifecycle, ChangeEventHandler} from "react";
import { SleepLog, getEmptyLog, removeSleepLog } from "../types/sleepLog";
import { Rating } from '../types/sleepLog';
import { FormEvent } from 'react';


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
const SleepForm = (diaryProps:SleepLog| undefined) => {
    console.log("sleep form props",diaryProps);
    const firstUpdate = useRef(0);
    const router = useRouter();
    let initialState:SleepLog = getEmptyLog();
    console.log("initial sleep log state inside of SleepForm", initialState);
    let [sleepLog, setSleepLog] = useState<SleepLog>(initialState);
    let [shouldSubmit, setShouldSubmit] = useState(false);

    console.log("sleepLog after setup :" , sleepLog);

    useEffect(()=> {
            if (diaryProps != undefined && diaryProps != null) {
                console.log("diary props are defined :", diaryProps );
                setSleepLog({...diaryProps});
            }
    },[diaryProps]); 

    useEffect (() => {



        if (shouldSubmit) {
            const sleepEntries = localStorage.getItem('sleepLogEntries');
            let sleepDiaryEntries: SleepLog[] = [];
            if (sleepEntries != null){
                sleepDiaryEntries = JSON.parse(sleepEntries);
            }
            if (diaryProps != undefined && diaryProps != null) {
                console.log("removing this log: ", diaryProps.id);
                const filteredEntries = removeSleepLog(sleepDiaryEntries, diaryProps);
                sleepDiaryEntries = filteredEntries;
            }
            if(sleepLog != null ) {
                sleepDiaryEntries.push(sleepLog);
            }
            console.log("this array is going into local storage", sleepDiaryEntries);
            localStorage.setItem('sleepLogEntries', JSON.stringify(sleepDiaryEntries));
            router.push({
                pathname: "/"
            });
        }
    },[shouldSubmit,diaryProps,router,sleepLog]);


    const handleSubmit = (e:FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        setShouldSubmit(true);
    }
   
    const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>): void => {
        console.log('handleChange')
        setSleepLog({
        
            ...sleepLog,
            [e.currentTarget.name]:  e.currentTarget.value
        });
  };

    return (
        <div className="sleepForm">
            <form method="post" className="entryForm" onSubmit={handleSubmit}>
                <div className="justifyContent">
                    <label>Select a date </label>
                    <div>
                        <input onChange={handleChange} value={sleepLog.sleepDate} name="sleepDate" type="date"></input>
                        <p className="errorDisplay" id="sleepDateError"></p>
                    </div>
                </div>
                <div className="justifyContent">
                    <label> What time did you go to bed? </label>
                    <input name="bedTime" onChange={handleChange} value={sleepLog.bedTime}></input>
                    <input type="text" name="TimeOfDay" list="AMPM"/>
                    <datalist id="AMPM">
                        <option value="AM"/>
                        <option value="PM"/>
                    </datalist>
                </div>
                <div className="justifyContent">
                    <label>What time did you fall asleep?</label>
                    <input name="fallAsleepTime"  onChange={handleChange} value={sleepLog.fallAsleepTime}></input>
                </div>
                <div className="justifyContent">
                    <label>When did you wake up? </label>
                    <input name="wakeUpTime" onChange={handleChange} value= {sleepLog.wakeUpTime}></input>
                </div>
                <div className="justifyContent">
                    <label>Rate the quality of your sleep: </label>
                    <input name="sleepQuality" onChange={handleChange} value={sleepLog.sleepQuality}></input>               
                </div>
                <div className="justifyContent">
                    <label> Were there any interuptions to your sleep?</label>
                    <input name="sleepInteruptions" onChange={handleChange} value={sleepLog.sleepInteruptions}></input>              
                </div>
                <div className="justifyContent">
                    <label>Which substances did you consume during the day?</label>
                    <input name="substances" onChange={handleChange} ></input>
                </div>
                <div className="justifyContent">
                    <label> Did you excercise on this date?</label>
                    <input name="excerciseDescription" onChange={handleChange} value={sleepLog.excerciseDescription}></input>               
                </div>
                <div className="justifyContent">
                    <label> Other comments: </label>
                    <textarea name="comments" onChange={handleChange} value={sleepLog.comments}></textarea>
                </div>

                <button className="submitButton" type="submit"> Submit</button>
                <div className="ErrorInfo"></div>
            </form>
        </div>

    );
}


export default SleepForm;