import Head from 'next/head';
import { withRouter } from 'next/router';
import Image from 'next/image';
import { useEffect,useState } from 'react';

import styles from '../../styles/Home.module.css'
import NavBar from '../components/NavBar';
import EntryListView from '../components/EntryListView';
import { SleepLog } from '../types/sleepLog';
import AppContext, {useAppContext} from '../components/AppContext';

//imported just for testing
import {Rating} from '../types/sleepLog';
import SleepForm from '../components/SleepForm';

//TODO fix props type 
 function Home(props:any) {

  let [entries, setEntries] = useState<[SleepLog]>();
  /* if we find entries in the browser cache fill them here */
  useEffect(() => {
    const onStorage = () => {
      let storedEntries:string = localStorage.getItem("sleepLogEntries") ||"";
      if( storedEntries ) {
        setEntries(JSON.parse(storedEntries) || [])
      }
    }
     let storedEntries:string = localStorage.getItem("sleepLogEntries") ||"";
    if( storedEntries ) {
      setEntries(JSON.parse(storedEntries) || []);
      window.addEventListener('storage', onStorage)
      return () => {
        console.log("removing listener on storage from home function")
        window.removeEventListener('storage',onStorage);
      }
    }
    
  },[]);

  return (
    <AppContext.Provider value={entries}>
      <div >
        <Head>
          <title>My Sleep Diary</title>
          <meta name="description" content="The go-to sleep diary app." />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap" rel="stylesheet"></link>
        </Head>
        <h2 className='center' id="titleHeader"> My Sleep Diary</h2>
        <NavBar></NavBar>
        <main className={styles.container}>    
        <EntryListView key={"entryListView"}></EntryListView>
        </main>

        <footer className={styles.footer}>
        </footer>
      </div>
    </AppContext.Provider>
  )
}

export default withRouter(Home);