import { connect } from 'react-redux'
import React from 'react'
import { delProduct, dispatchToUpdate } from 'action'
import { Link } from 'react-router-dom'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import { Add } from '@material-ui/icons'

function ProductList({ product, toUpdate, del }) {
  const onClickDel = e => {
    del(e.target.value)
  }

  const onClickToUpdate = e => {
    const id = Number(e.target.value)
    const [product_to_update] = product.filter(x => x.id === id)
    toUpdate(product_to_update)
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>
              <Link to={`/product/create`}>
                <IconButton>
                  <Add />
                </IconButton>
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((x, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{x.name}</TableCell>
              <TableCell>{x.price}</TableCell>
              <TableCell>{x.stock}</TableCell>
              <TableCell>{x.desc}</TableCell>
              <TableCell>
                <button value={x.id} onClick={onClickDel}>
                  delete
                </button>
                <Link to={`/product/create`}>
                  <button value={x.id} onClick={onClickToUpdate}>
                    edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = state => ({
  product: state.product.result
})

const mapDispatchToProps = dispatch => ({
  del: payload => dispatch(delProduct(payload)),
  toUpdate: payload => dispatch(dispatchToUpdate(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
