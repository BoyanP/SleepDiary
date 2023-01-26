import React from "react";
import { createPortal } from "react-dom";

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
    return createPortal(
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
                <div className="modal-footer justifyContent">
                    <button className="modal-button editButton" onClick={props.onClose}> Dismiss</button>
                    <button className="modal-button modal-continue-button deleteButton" onClick={props.onContinue}> Delete</button>
                    
                </div>
            </div>
        </div>
        , document.body
    );
}

export default Modal;