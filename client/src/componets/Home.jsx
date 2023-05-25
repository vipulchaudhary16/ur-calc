import React, { useContext, useEffect, useState } from 'react'
import { Calculator } from './Calculator'
import { CalculatorHistory } from './CalculatorHistory'
import { CalculationContext, CalculationProvider } from '../contexts/calculation.context'
import { AuthContext } from '../contexts/auth.context'

export const Home = () => {
	const [name, setName] = useState("")
	const { calculation, addCalculation, loadCalculationHistory } = useContext(CalculationContext)
	const { user } = useContext(AuthContext)

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!user) {
			alert("You need to login")
			return
		}
		try {
			const data = {
				name,
				calculation
			}
			await addCalculation(data)
			loadCalculationHistory()
			setName("")
		} catch (error) {
			alert("Internal server error")
		}
	}

	return (
			<div className='container'>
				<div>
					<Calculator />
					<div className='save-form-container'>
						<h2>Calculation Name</h2>
						<form className='save-calc-form' onSubmit={(e) => handleSubmit(e)}>
							<input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} required />
							<button type='submit'>Save</button>
						</form>
					</div>
				</div>
				<div>
					<CalculatorHistory />
				</div>
			</div>
	)
}
