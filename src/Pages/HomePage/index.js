import React from 'react'
import { Header, SearchBar, IconWithBadge, ProductCard } from 'Component'
import { Context } from 'store'
import { ADD_DETAILS, ADD_ITEM } from 'store/constants'
import { Link, useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { makeStyles } from '@material-ui/core/styles'

function HomePage() {
  const { product, cart, dispatchCart, setDetail } = React.useContext(Context)

  const history = useHistory()

  const createProduct = () => {
    history.push('/product')
  }

  const searchProduct = () => {
    return
  }

  const addToCart = data => {
    const { id, product_name, product_price, image, stock, description } = data
    dispatchCart({
      type: ADD_ITEM,
      payload: {
        id,
        product_name,
        product_price,
        image,
        stock,
        quantity: 1,
        total_price: product_price * 1,
        description,
      },
    })
  }

  const goToDetail = data => {
    console.log('gotodetail', data)
    const { id, product_name, product_price, image, stock, description } = data
    setDetail({
      type: ADD_DETAILS,
      payload: {
        id,
        product_name,
        product_price,
        image,
        stock,
        description,
      },
    })
    history.push('/detail')
  }

  const classes = useStyles()

  return (
    <>
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
            <ShoppingCart className={classes.icon} />
          </Link>
        </IconWithBadge>
      </Header>
      <Grid container spacing={3} className={classes.container}>
        {product.map(x => (
          <Grid item key={x.id}>
            <ProductCard
              data={x}
              onClick={addToCart}
              onClickCard={goToDetail}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(2),
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  card: {},
  button: {
    backgroundColor: 'white',
    borderColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
}))

export default HomePage
