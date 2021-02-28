import React from 'react'
import { ProductCard } from 'Component'
import { Context } from 'store'
import { ADD_DETAILS, ADD_ITEM } from 'store/constants'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { MyHeader } from 'Pages/MyComponent'

function HomePage() {
  const { product, user, dispatchCart, setDetail } = React.useContext(Context)

  const history = useHistory()

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
      <MyHeader />
      <Grid container spacing={3} className={classes.container}>
        {product.map(x => (
          <Grid item key={x.id}>
            <ProductCard
              data={x}
              onClick={addToCart}
              onClickCard={goToDetail}
              hideAction={!!user}
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
