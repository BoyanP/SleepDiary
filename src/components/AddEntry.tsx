import Link from 'next/link';
const AddEntry = () => {

    //TODO add entry style? button? 
    return (
        <div className= "addEntry">
            <button className="addEntryButton">
                <Link href="/form">
                    New Entry + 
                </Link>
                
            </button>

        </div>
    );
}



export default AddEntry; 