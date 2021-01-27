import React from 'react';
import Table from "ui-kit/Molecule/Table";

const Body = props => {
    const data = props.activeData
    return ( 
        <>
            <Table data={data} />
        </>
    )
}
 
export default Body;