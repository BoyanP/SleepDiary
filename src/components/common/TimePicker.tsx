

const timePicker = (onChangeHandler: (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>)=> void ) => {
    return(
        <div>
            <input onChange={onChangeHandler}></input>
        </div>
    );
}

export default timePicker;