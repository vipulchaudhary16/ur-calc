import React from 'react'
import { HistoryRow } from './HistoryRow'
import "../styles/Table.css"
import { useContext } from 'react'
import { CalculationContext } from '../contexts/calculation.context'

export const CalculatorHistory = () => {
    const { calculationHistory } = useContext(CalculationContext)

    return (
        <div className='history-table'>
            <h1>Your Calculations</h1>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Calculation</th>
                    <th>Result</th>
                    <th></th>
                </thead>
                <tbody>
                    {
                        calculationHistory.map((row) => <HistoryRow data={row} />)
                    }
                </tbody>
            </table>
        </div>
    )
}
