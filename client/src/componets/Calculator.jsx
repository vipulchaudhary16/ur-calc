import React, { useState } from 'react'
import "../styles/Calculator.css"
export const Calculator = () => {
    const [calculationString, setCalculationString] = useState('')

    const handleChange = (e) => {
        const newString = calculationString + (e.target.value)
        setCalculationString(newString)
    }

    const calculate = () => {
        const result = eval(calculationString)
        setCalculationString(result)
    }
    return (
        <>

            <h1>Calculator</h1>
        <div className='calculator'>
            <div className="display">
                <span className="result">{calculationString ? calculationString : 0}</span>
            </div>
            <div className="calc-body">
                <div className="button-row">
                    <button onClick={() => setCalculationString("")}>AC</button>
                    <button>+/-</button>
                    <button value={'%'} onClick={(e) => handleChange(e)}>%</button>
                    <button value={'/'} onClick={(e) => handleChange(e)}>/</button>
                </div>
                <div className="button-row">
                    <button value={7} onClick={(e) => handleChange(e)}>7</button>
                    <button value={8} onClick={(e) => handleChange(e)}>8</button>
                    <button value={9} onClick={(e) => handleChange(e)}>9</button>
                    <button value={'*'} onClick={(e) => handleChange(e)}>*</button>
                </div>
                <div className="button-row">
                    <button value={4} onClick={(e) => handleChange(e)}>4</button>
                    <button value={5} onClick={(e) => handleChange(e)}>5</button>
                    <button value={6} onClick={(e) => handleChange(e)}>6</button>
                    <button value={'-'} onClick={(e) => handleChange(e)}>-</button>
                </div>
                <div className="button-row">
                    <button value={1} onClick={(e) => handleChange(e)}>1</button>
                    <button value={2} onClick={(e) => handleChange(e)}>2</button>
                    <button value={3} onClick={(e) => handleChange(e)}>3</button>
                    <button value={'+'} onClick={(e) => handleChange(e)}>+</button>
                </div>
                <div className="button-row">
                    <button value={0} onClick={(e) => handleChange(e)} className='bigger-button'>0</button>
                    <button value={"."} onClick={(e) => handleChange(e)}>.</button>
                    <button onClick={() => calculate()}>=</button>
                </div>
            </div>
        </div>
        </>
    )
}
