import React from "react";

interface modalModel {
    shouldDisplay:boolean;
    title: string;
    body: string;
    onContinue: ()=> void;
    onClose:() => void;

}

const Modal = (props:modalModel) => {

    if (!props.shouldDisplay) {
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title"> 
                    {props.title}
                    </h4>
                </div>
                <div className="modal-body">
                    {props.body}
                </div>
                <div className="modal-footer">
                    <button className="modal-button modal-continue-button" onClick={props.onContinue}> Continue</button>
                    <button className="modal-button" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;