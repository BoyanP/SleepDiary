import React, {useContext} from 'react';
import { SleepLog } from '../types/sleepLog';

const AppContext = React.createContext<SleepLog[] | undefined>( undefined );

export function useAppContext(){
    return useContext(AppContext);
}

export function setAppContext(entries: SleepLog[] | undefined){
    return useContext(React.createContext(entries));
}

export default AppContext;