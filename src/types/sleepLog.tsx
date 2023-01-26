import crypto from "crypto";
import {uuid} from "uuid";

export enum Rating {
    none = 0,
    oneStar = 1,
    twoStar,
    threeStar,
    fourStar,
    fiveStar,
 
}

export enum Substance {
  tobacco = "tobacco",
  caffeine = "caffeine",
  alcohol = "alcohol",
  other = "other"
}

// interface SleepInteruption {
//     description: string;
//     interuptionAmount: number;

// }



export interface SleepLog {
    id: string;
    sleepDate: string | undefined;
    bedTime: string | undefined;
    fallAsleepTime: string | undefined;
    wakeUpTime: string |undefined;
    sleepQuality?: Rating | undefined;
    sleepInteruptions: string | undefined;
    //substances?: [Substance,string][];
    substances:string | undefined;
    excerciseDescription: string | undefined;
    comments: string | undefined;

}

const removeSleepLog = (entries: SleepLog[], entry:SleepLog) =>{
  return entries.filter((sleepLog)=> sleepLog.id !== entry.id)
}

const getEmptyLog = () => {

  const log = {
    id:crypto.randomBytes(20).toString('hex'),
    sleepDate: undefined,
    bedTime: undefined,
    fallAsleepTime: "",
    wakeUpTime: "",
    sleepQuality: undefined,
    sleepInteruptions: "",
    substances: undefined,
    excerciseDescription: "",
    comments: "",

  }
  console.log("initial state id:", log.id);
  return log;
}

export {removeSleepLog, getEmptyLog};


