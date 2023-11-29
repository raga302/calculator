import React, { useState } from "react";
import './Calculator.css';
import Btn from "./Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function Calculator() {
    // Toggle Mode
    const [mode, setMode] = useState(false);

    const mainDivStyle = {
        background: "red"
    };

    const modeBtn = {
        background: "#fff",
        color: "#000"
    };

    const boxStyle = {
        background: "rgb(50, 58, 56)",
    };

    const modeHandler = () => {
        setMode((prev)=> !prev);
    }
  
// After Dark OR Ligth Mode Styled
    if(mode === true){
        mainDivStyle.background = "#e8dae7"
        modeBtn.background = "#000"
        modeBtn.color = "#fff"
        boxStyle.background = "rgb(50, 58, 56)"
    }else{
        mainDivStyle.background = "rgb(23, 27, 31)"
        modeBtn.background = "#fff"
        modeBtn.color = "#000"
        boxStyle.background = "#2d354f"
    }

    return (
        <div>
            <div className="main" style={mainDivStyle}>
                <div>
                <button type="button" style={modeBtn} onClick={modeHandler} className=" mode ">{
                    mode ? <FontAwesomeIcon icon={faMoon} />
                    : <FontAwesomeIcon icon={faSun} /> }
                    </button>
                </div>
               <Btn boxStyle={boxStyle}/>
            </div>
        </div>
    )
}

export default Calculator;