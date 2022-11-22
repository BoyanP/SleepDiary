import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import NavBar from '../components/NavBar';
import EntryListView from '../components/EntryListView';
import { SleepLog } from '../types/sleepLog';

//imported just for testing
import {Rating} from '../types/sleepLog';
export default function Home() {

  /* if we find entries in the browser cache fill them here */
  const entries: SleepLog[] = new Array<SleepLog>;
  const date = new Date();
  date.setDate(date.getDate() - 1)
  const yesterday = new Date(date);
  entries.push({
    sleepDate: yesterday,
    sleepQuality: Rating.twoStar,
    comments:"some comments dunno if this is what should be displayed but here is some test data "
  });
  entries.push( {
    sleepDate: new Date(),
    sleepQuality: Rating.fiveStar
  });




  return (
    
    <div className={styles.container}>
      <Head>
        <title>My Sleep Diary</title>
        <meta name="description" content="The go-to sleep diary app." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      <h2 className='titleHeader'> My Sleep Diary</h2>
      <NavBar></NavBar>
     <main>    
      <EntryListView entryList = {entries} ></EntryListView>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
