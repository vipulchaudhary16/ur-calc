import React, { useContext, useState } from 'react'
import { Calculator } from './Calculator'
import { CalculatorHistory } from './CalculatorHistory'
import { CalculationContext } from '../contexts/calculation.context'

export const Home = () => {
	const [name, setName] = useState("")
	const { calculation, addCalculation } = useContext(CalculationContext)

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const data = {
				name,
				calculation
			}
			const res = await addCalculation(data)
			const jsonRes = await res.json()
			alert(jsonRes.message)
		} catch (error) {
			alert("Internal server error")
		}
	}

	return (
		<div className='container'>
			<div>
				<Calculator />
				<div>
					<h2>Calculation Name</h2>
					<form className='save-calc-form' onSubmit={(e) => handleSubmit(e)}>
						<input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} required />
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
