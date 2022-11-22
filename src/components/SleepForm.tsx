import { SleepLog } from "../types/sleepLog";

const SleepForm = ( props: SleepLog) => {

    return (
        <div className="sleepForm">
            <form action={/*TODO */} method="post">

                <label>Select a date </label>
                <input id="sleepDate"></input>

                <label> What time did you go to bed? </label>
                <input id="bedTime"></input>

                <label>What time did you fall asleep?</label>
                <input id="fallAsleepTime"></input>

                <label>When did you wake up? </label>
                <input id="wakeUpTime"></input>

                <label>Rate the quality of your sleep: </label>
                <input id="sleepQuality"></input>

                <label> Were there any interuptions to your sleep?</label>
                <input id="sleepInteruptions"></input>

                <label>Which substances did you consume during the day?</label>
                <input id="substances"></input>

                <label> Did you excercise on this date?</label>
                <input id="excerciseDescription"></input>
                
                <label> Other comments: </label>
                <input id="comments"></input>

                <button type="submit"> Submit</button>
            </form>
        </div>

    );
}

export default SleepForm;