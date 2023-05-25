import React, { useContext, useState } from 'react'
import "../styles/Calculator.css"
import { CalculationContext } from '../contexts/calculation.context'
export const Calculator = () => {
    const { calculation, setCalculation } = useContext(CalculationContext)
    const [result, setResult] = useState("")

    const handleChange = (e) => {
        let newString
        if (result) {
            newString = result + (e.target.value)
            console.log("here")
        } else {
            newString = calculation + (e.target.value)
        }
        setCalculation(newString)
        setResult("")
    }

    const calculate = () => {
        try {
            const result = eval(calculation)
            setResult(result)
        } catch (error) {
            setResult("ERROR")
        }
    }

    const clearDisplay = () => {
        setCalculation("")
        setResult("")
    }
    return (
        <>
            <h1>Calculator</h1>
            <div className='calculator'>
                <div className="display">
                    <span className="result">{result ? result : calculation}</span>
                </div>
                <div className="calc-body">
                    <div className="button-row">
                        <button onClick={() => clearDisplay()}>AC</button>
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
