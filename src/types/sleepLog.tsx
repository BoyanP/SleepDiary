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

interface SleepInteruption {
    description: string;
    interuptionAmount: number;

}

// class SleepInteruption {

//     description: string;
//     interuptionAmount: number ; 

//     constructor(description?: string, interuptionAmount?: number ) {

//         this.description = description ? description : "";
//         this.interuptionAmount = interuptionAmount ? interuptionAmount : 0;
//     }
// }



export interface SleepLog {

    sleepDate?: Date;
    bedTime?: string;
    fallAsleepTime?: string;
    wakeUpTime?: string;
    sleepQuality?: Rating;
    sleepInteruptions?: SleepInteruption[];
    substances?: [Substance,string][];
    excerciseDescription?: string;
    comments?: string;

}