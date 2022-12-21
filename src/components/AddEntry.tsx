import Link from 'next/link';
const AddEntry = () => {

    //TODO add entry style? button? 
    return (
        <div className= "addEntry">
            <Link href="/form">
                <button className="addEntryButton">
                    
                        New Entry + 
                
                    
                </button>
             </Link>

        </div>
    );
}



export default AddEntry; 