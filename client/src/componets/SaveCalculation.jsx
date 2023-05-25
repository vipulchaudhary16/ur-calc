import React, { useContext,useState } from 'react'
import { CalculationContext } from '../contexts/calculation.context'
import { AuthContext } from '../contexts/auth.context'

export const SaveCalculation = () => {
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
        <div>
            <div className='save-form-container'>
                <h2>Calculation Name</h2>
                <form className='save-calc-form' onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>
    )
}
