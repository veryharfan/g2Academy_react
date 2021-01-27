import React from 'react'
import "./table.css"

const Table = ( props ) => {
    const { data } = props
    let dataHead = Object.keys(data[0])

    return (
        <table id="table">
            <thead>
                <tr>
                    {dataHead.map(x => (
                        <th key={x}>{x[0].toLocaleUpperCase() + x.slice(1)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(x => (
                    <tr key={x.id}>
                        {Object.values(x).map(e => (
                            <td>{e}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table