import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import SleepForm from '../../components/SleepForm';
import { SleepLog } from '../../types/sleepLog';

type Props = {
  sleepLog: SleepLog,
  fromEdit: boolean
}
export default function Entry( props:Props ) {
  return (
    <div>
      {/* the SleepForm is probably going to display
       differently based on if the user is editting an existing entry or not.*/}
      <SleepForm {...props.sleepLog}> </SleepForm>
    </div>
  );
}
