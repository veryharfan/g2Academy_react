import React from 'react'
import { CheckoutCard } from 'Component'
import { Context } from 'store'
import { CHECKOUT, DELETE_ITEM, UPDATE_ITEM } from 'store/constants'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { MyHeader } from '../MyComponent'

function Checkout() {
  const { cart, dispatchCart } = React.useContext(Context)

  let total = 0
  cart.result.forEach(x => {
    total += x.total_price
  })

  function onClickCheckout() {
    dispatchCart({
      type: CHECKOUT,
      payload: null,
    })
  }

  function onClickMin(data) {
    const {
      id,
      product_name,
      product_price,
      image,
      stock,
      quantity,
      description,
    } = data
    dispatchCart({
      type: UPDATE_ITEM,
      payload: {
        id,
        product_name,
        product_price,
        image,
        stock,
        quantity: quantity - 1,
        total_price: product_price * (quantity - 1),
        description,
      },
    })
  }

  function onClickAdd(data) {
    const {
      id,
      product_name,
      product_price,
      image,
      stock,
      quantity,
      description,
    } = data
    dispatchCart({
      type: UPDATE_ITEM,
      payload: {
        id,
        product_name,
        product_price,
        image,
        stock,
        quantity: quantity + 1,
        total_price: product_price * (quantity + 1),
        description,
      },
    })
  }

  function onClickDelete(data) {
    dispatchCart({
      type: DELETE_ITEM,
      payload: data.id,
    })
  }

  return (
    <>
      <MyHeader />
      {cart.result.map(x => (
        <CheckoutCard
          cart={x}
          onClickAdd={onClickAdd}
          onClickDelete={onClickDelete}
          onClickMin={onClickMin}
          key={x.product_id}
        />
      ))}
      <div hidden={!cart.checkout}>
        <Paper style={styles.totalPrice}>Checkout Success</Paper>
      </div>
      <Paper style={styles.totalPrice}>
        <Typography variant="h5">Total</Typography>
        <div style={styles.checkout}>
          <Typography variant="h5">Rp.{total.toLocaleString()}</Typography>
          <Button variant="contained" color="primary" onClick={onClickCheckout}>
            Checkout
          </Button>
        </div>
      </Paper>
    </>
  )
}

const styles = {
  totalPrice: {
    display: 'flex',
    margin: '16px',
    justifyContent: 'space-between',
    padding: '16px',
  },
  checkout: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
  },
}

export default Checkout
