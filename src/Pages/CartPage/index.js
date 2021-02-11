import React from 'react'
import { connect } from 'react-redux'
import { deleteItem, checkout } from 'action'
import { Header } from 'ui-kit/Organism'
import { MediaControlCard } from 'ui-kit/Molecule'
import { Button, Paper, Typography } from '@material-ui/core'

const styles = {
  totalPrice: {
    display: 'flex',
    margin: '16px',
    justifyContent: 'space-between',
    padding: '16px'
  },
  checkout: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px'
  }
}

function CartPage({ cart, checkouts, checkoutSuccess }) {
  let total = 0
  cart.forEach(x => {
    total += x.total_price
  })

  function onClickCheckout() {
    checkouts()
    checkoutSuccess = true
  }

  return (
    <>
      <Header>Online Shop</Header>
      {cart.map(x => (
        <MediaControlCard
          id={x.product_id}
          name={x.product_name}
          price={x.product_price}
          image={x.image}
          discount={x.discount}
          key={x.product_id}
        />
      ))}
      <div hidden={!checkoutSuccess}>
        <Paper style={styles.totalPrice}>Checkout Success</Paper>
      </div>
      <Paper style={styles.totalPrice}>
        <Typography variant="h5">Total</Typography>
        <div style={styles.checkout}>
          <Typography variant="h5">Rp. {total.toLocaleString()}</Typography>
          <Button variant="contained" color="primary" onClick={onClickCheckout}>
            Checkout
          </Button>
        </div>
      </Paper>
    </>
  )
}

const mapStateToProps = state => ({
  cart: state.cart.result,
  checkoutSuccess: state.cart.checkout
})

const mapDispatchToProps = dispatch => ({
  delItem: payload => dispatch(deleteItem(payload)),
  checkouts: () => dispatch(checkout())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
