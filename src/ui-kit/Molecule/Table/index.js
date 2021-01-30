import React from 'react'
import TableStyle from "./Table.module.css"
import PropTypes from 'prop-types';

const Table = ( { data , dataHead, page } ) => {
    
    return (
        <table className={`${TableStyle.table}`}>
            <thead>
                <tr>
                    {dataHead.map(x => (
                        <th key={x}>{x[0].toLocaleUpperCase() + x.slice(1)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((x, i) => (
                    <tr key={x.id}>
                        <td>{(page-1)*10+(i+1)}</td>
                        {Object.values(x).map(e => (
                            <td>{e}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

Table.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number
        })
    )
}

export default Table