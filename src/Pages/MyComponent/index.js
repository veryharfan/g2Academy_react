import React from 'react'
import { Header, SearchBar, IconWithBadge } from 'Component'
import { Context } from 'store'
import { Link, useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { makeStyles } from '@material-ui/core/styles'

export function MyHeader() {
  const { cart } = React.useContext(Context)

  const history = useHistory()

  const createProduct = () => {
    history.push('/product')
  }

  const searchProduct = () => {
    return
  }

  const classes = useStyles()

  return (
    <Header>
      <Link to="/" className={classes.link}>
        <Typography>Online Shop</Typography>
      </Link>
      <SearchBar
        prefix="Search :"
        placeholder="input keyword"
        onClick={searchProduct}
      />
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        startIcon={<Add />}
        onClick={createProduct}
        disableElevation
        onFocus={classes.onFocus}
      >
        Create Product
      </Button>
      <IconWithBadge badgeCount={cart.result.length}>
        <Link to="/checkout" className={classes.link}>
          <ShoppingCart />
        </Link>
      </IconWithBadge>
    </Header>
  )
}

const useStyles = makeStyles(theme => ({
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
}))
