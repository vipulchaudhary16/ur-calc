import React from 'react'
import { RiDeleteBin6Line, RiRepeatLine } from "react-icons/ri"
import "../styles/Table.css"

export const HistoryRow = ({ data }) => {
    const { name, calculation } = data
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{calculation}</td>
                <td>{eval(calculation)}</td>
                <td  className='action-icon'><RiDeleteBin6Line /></td>
                <td className='action-icon'><RiRepeatLine /></td>
            </tr>
        </>
    )
}
