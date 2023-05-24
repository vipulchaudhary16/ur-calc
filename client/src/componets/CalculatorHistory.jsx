import React from 'react'
import { HistoryRow } from './HistoryRow'
import "../styles/Table.css"

export const CalculatorHistory = () => {
    const data = [
        {
            name: "xxxddd",
            calculation: "1-2+9+47"
        },
        {
            name: "xxxddd",
            calculation: "1-2+9+47"
        }
    ]
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
                        data.map((row) => <HistoryRow data={row} />)
                    }
                </tbody>
            </table>
        </div>
    )
}
