import { createContext, useState } from "react";
import { useEffect } from "react";

export const CalculationContext = createContext({
    calculation: String,
    calculationHistory: [],
    result: 0,
    setResult : () => {},
    setCalculation: () => { },
    addCalculation: () => { },
    deleteCalculation: () => { },
    loadCalculationHistory: () => { },
})

export const CalculationProvider = ({ children }) => {
    const API = process.env.REACT_APP_BACKEND
    const [calculation, setCalculation] = useState('')
    const [result, setResult] = useState(0)
    const [calculationHistory, setCalculationHistory] = useState([])

    const addCalculation = async (data) => {
        return await fetch(`${API}/api/calculation`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token"),
            },
            body: JSON.stringify(data)
        });
    }

    const deleteCalculation = async (id) => {
        return await fetch(`${API}/api/calculation/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token"),
            },
        });
    }

    const loadCalculationHistory = async () => {
        const data = await fetch(`${API}/api/calculation`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token"),
            },
        });
        setCalculationHistory(await data.json())
    }

    const value = { addCalculation, deleteCalculation, calculation, setCalculation, calculationHistory , loadCalculationHistory, result, setResult}
    return <CalculationContext.Provider value={value} >
        {children}
    </CalculationContext.Provider>
}