import React, { useState } from "react";
import './Btn.css';

function Btn(props) {
    let [data, setdata] = useState("");

    const printBtnValue = (e) => {
        setdata(data += e.target.value);
    };

    const emptyInput = () => {
        setdata("");
    };

    const backSpace = () => {
        setdata(data.slice(0, data.length - 1));
    };

    const evaluateInputValue = () => {
        setdata(eval(data));
    };

  

   


    return (
        <div>
            <div className="mini">
                <div className="box" style={ props.bgchanger } >
                    <div>
                        <input type='text' value={data} placeholder='0' className="text-right text-white fw-bold" id="inputBox" />
                    </div>
                    <div className="btnDiv">
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="9">9</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="8">8</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="7">7</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="+">+</button>
                        <button type='text' className="text-center fw-bold special" id="" onClick={evaluateInputValue} value="=">=</button><br />
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="6">6</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="5">5</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="4">4</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="-">-</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={emptyInput} value="AC">AC</button><br />
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="3">3</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="2">2</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="1">1</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="*">*</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={backSpace} value="DEL">DEL</button><br />
                        <button type='text' className="text-center fw-bold zero" id="" onClick={printBtnValue} value="00">00</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="0">0</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value="/">/</button>
                        <button type='text' className="text-center fw-bold" id="btn" onClick={printBtnValue} value=".">.</button><br />

                    </div>

                </div>
              
            </div>
        </div>
    )
};


export default Btn;