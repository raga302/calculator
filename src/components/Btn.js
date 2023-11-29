import React, { useState } from "react";
import './Btn.css';

function Btn(props) {
    //Input Value State !
    const [targetValue, setTargetValue] = useState("");

    // += Input Values !
    const btnHandler = (e) => {
        setTargetValue(targetValue + e.target.value);
    };

    // Delete Handler !
    const delBtnHandler = () => {
        let newStr = targetValue.substring(0, targetValue.length - 1);
        setTargetValue(newStr);
    };

    // Evaluate Input Value !
    const evalBtnHandler = () => {
        if (targetValue === "") {
            alert("Please Enter Number !")
        } else {
            let newStr = eval(targetValue);
            setTargetValue(newStr);
        }
    };

    // For Empty Input Value !
    const acBtnHandler = () => {
        setTargetValue("");
    };






    return (
        <div>
            <div className="mini">
                <div className="box" style={props.boxStyle}>
                    <div>
                        <input type='text' value={targetValue} placeholder='0' className="text-right text-white fw-bold" id="inputBox" />
                    </div>
                    <div className="btnDiv">
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="9">9</button>
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="8">8</button>
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="7">7</button>
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="+">+</button>
                        <button type='text' onClick={evalBtnHandler} className="text-center fw-bold special" id="" value="=">=</button><br />
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="6">6</button>
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="5">5</button>
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="4">4</button>
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="-">-</button>
                        <button type='text' onClick={acBtnHandler} className="text-center fw-bold" id="btn" value="AC">AC</button><br />
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="3">3</button>
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="2">2</button>
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="1">1</button>
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="*">*</button>
                        <button type='text' onClick={delBtnHandler} className="text-center fw-bold" id="btn" value="DL">DL</button><br />
                        <button type='text' onClick={btnHandler} className="text-center fw-bold zero" id="" value="00">00</button>
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="0">0</button>
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value="/">/</button>
                        <button type='text' onClick={btnHandler} className="text-center fw-bold" id="btn" value=".">.</button><br />
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Btn;