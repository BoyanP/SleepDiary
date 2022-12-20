import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import SleepForm from '../../components/SleepForm';
import { SleepLog } from '../../types/sleepLog';
import NavBar from '../../components/NavBar';



type Props = {
  sleepLog: SleepLog,
  fromEdit: boolean
}
export default function Entry( props:Props ) {
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
      <SleepForm {...props.sleepLog}> </SleepForm>
    </div>
  );
}
