export {}

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
    _id: number;
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