import React from 'react'
import { Calculator } from './Calculator'
import { CalculatorHistory } from './CalculatorHistory'
import { SaveCalculation } from './SaveCalculation'
import { CalculationProvider } from '../contexts/calculation.context'

export const Home = () => {
	return (
		<CalculationProvider>
			<div className='container'>
				<div>
					<Calculator />
					<SaveCalculation />
				</div>
				<div>
					<CalculatorHistory />
				</div>
			</div>
		</CalculationProvider>
	)
}
