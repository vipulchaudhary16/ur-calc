import React from 'react'
import { Calculator } from './Calculator'
import { CalculatorHistory } from './CalculatorHistory'

export const Home = () => {
	return (
		<div className='container'>
			<div>
				<Calculator />
				<div>
					<h2>Calculation Name</h2>
					<form className='save-calc-form'>
						<input type="text" placeholder='Enter Name' />
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
