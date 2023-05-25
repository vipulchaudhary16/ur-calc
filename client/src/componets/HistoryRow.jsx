import React from 'react'
import { RiDeleteBin6Line, RiRepeatLine } from "react-icons/ri"
import "../styles/Table.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { CalculationContext } from '../contexts/calculation.context'

export const HistoryRow = ({ data }) => {
    const { name, calculation } = data
    const [result, setResult] = useState("")
    const { deleteCalculation, loadCalculationHistory, setCalculation } = useContext(CalculationContext)

    useEffect(() => {
        try {
            setResult(eval(calculation))
        } catch (error) {
            setResult("error")
        }
    }, [])

    const handleDelete = async () => {
        const are_you_sure = window.confirm("Are you sure?")
        if (!are_you_sure) return
        try {
            await deleteCalculation(data._id)
            loadCalculationHistory()
        } catch (error) {
            alert("Internal server error")
        }
    }

    const handleRepeat = () => {
        setCalculation(calculation)
    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{calculation}</td>
                <td>{result}</td>
                <td className='action-icon' onClick={() => handleDelete()}><RiDeleteBin6Line /></td>
                <td className='action-icon' onClick={() => handleRepeat()}><RiRepeatLine /></td>
            </tr>
        </>
    )
}
