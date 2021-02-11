import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import grey from '@material-ui/core/colors/grey'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const classes = {
  icon: {
    margin: 0,
    paddingTop: '16px'
  },
  cart: {
    color: grey[200]
  }
}

function CartIcon({ badgeCount }) {
  return (
    <Link to={`/cart`}>
      <IconButton style={classes.icon}>
        <Badge badgeContent={badgeCount} color="secondary">
          <ShoppingCart style={classes.cart} />
        </Badge>
      </IconButton>
    </Link>
  )
}

const mapStateToProps = state => ({
  badgeCount: state.cart.result.length
})

export default connect(mapStateToProps)(CartIcon)
