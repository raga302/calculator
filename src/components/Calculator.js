import React, { useState } from "react";
import './Calculator.css';
import Btn from "./Btn";

function Calculator() {
const styleBtn = {
    
};

const boxStyle = {

};

const modeStyle = {

};

    
    const [mode, setmode] = useState("dark");
    const [modeText, setmodeText] = useState("Light Mode");


    const modeChangeHandler = () => {
       if (mode == "dark") {
        setmode("light");
        setmodeText("Dark Mode");
       }else{
        setmode("dark");
        setmodeText("Light Mode")
       }
    };

    
    if (mode === "dark") {
        styleBtn.background = "black";
        boxStyle.background = "#2d354f";
        modeStyle.background = "white";
        
    }
    else{
        styleBtn.background = "#d0c6c6";
        boxStyle.background = "#154041";
        modeStyle.background = "black";
        modeStyle.color = "white";
    }
   
    

    return (
        <div>
            <div className="main" style={ styleBtn }>
                <div>
                <button type="button" className="btn mode" onClick={ modeChangeHandler } style={ modeStyle } >{ modeText }</button>
                </div>
               <Btn bgchanger={boxStyle}/>
            </div>
        </div>
    )
}

export default Calculator;