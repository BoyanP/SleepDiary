import Head from 'next/head'
import { SleepLog, getEmptyLog } from "../../types/sleepLog"
import { useRouter } from 'next/router'
import AppContext, {useAppContext} from '../../components/AppContext';
import { useEffect, useState } from 'react';
import { getLocalStorageEntries } from '../../utils/LocalStorageUtils';
import NavBar from '../../components/NavBar';
import SleepForm from '../../components/SleepForm';


export default function editEntry() {
    const router = useRouter()
    const { id } = router.query;
    const initialState: SleepLog = getEmptyLog();
    let entries: SleepLog[] = []; 
    const [selectedEntry, setSelectedEntry] = useState(initialState);
    console.log("selectedEntry", selectedEntry);
    useEffect(()=> {
        entries = getLocalStorageEntries();
        console.log("entries in local storage", entries);
        if (id){
          const filteredEntries = entries.filter((entry)=> {
            return entry.id === id;
          });
          
          if (filteredEntries) {
            console.log("filtered entries:",filteredEntries);
            setSelectedEntry(filteredEntries[0]);
          }
        }
    }, []);
    
  return (
    <div>
       <Head>
        <title>My Sleep Diary</title>
        <meta name="description" content="The go-to sleep diary app." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      <h2 className='center' id="titleHeader"> My Sleep Diary</h2>
      <NavBar></NavBar>
      <SleepForm {...selectedEntry}></SleepForm>
    </div>
  );

}


