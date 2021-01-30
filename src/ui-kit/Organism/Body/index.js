import React from 'react';
import Table from "ui-kit/Molecule/Table";
import Space from "ui-kit/Atom/Space";
import Pagination from "ui-kit/Molecule/Pagination";

const Body = props => {
    const { activeData, dataHead , page, numPage, onClickNext, onClickPrev} = props
    return ( 
        <>
            <Table data={activeData} dataHead={dataHead} page={page}/>
            <Space space="2" />
            <Pagination onClickNext={onClickNext} onClickPrev={onClickPrev} page={page} numPage={numPage}/>
        </>
    )
}
 
export default Body;