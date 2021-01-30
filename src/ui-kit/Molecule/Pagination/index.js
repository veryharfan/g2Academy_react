import React from 'react'
import Button from 'ui-kit/Atom/Button'
import PgStyle from './Pagination.module.css'

const Pagination = ({onClickNext, onClickPrev, page, numPage}) => {

    return (
        <div className={PgStyle["prev-next"]}>
            <Button onClick={onClickPrev} typeStyle={"pagination"} disabled={page === 1}>Prev</Button>
            <p>Page {page}</p>
            <Button onClick={onClickNext} typeStyle={"pagination"} disabled={page === numPage}>Next</Button>
        </div>
    )
}

export default Pagination