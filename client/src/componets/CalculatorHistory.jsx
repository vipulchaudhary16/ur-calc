import React, { useEffect } from 'react'
import { HistoryRow } from './HistoryRow'
import "../styles/Table.css"
import { useContext } from 'react'
import { CalculationContext } from '../contexts/calculation.context'
import { AuthContext } from '../contexts/auth.context'

export const CalculatorHistory = () => {
    const { calculationHistory, loadCalculationHistory } = useContext(CalculationContext)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        user && loadCalculationHistory()
    }, [])

    return (
        <div className='history-table'>
            <h1>Your Calculations</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Calculation</th>
                        <th>Result</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        calculationHistory.length > 0 && calculationHistory.map((row) => <HistoryRow data={row} />)
                    }
                </tbody>
            </table>
        </div>
    )
}
