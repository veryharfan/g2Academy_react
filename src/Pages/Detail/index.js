import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core'
import React from 'react'
import { Context } from 'store'
import { ADD_ITEM, DELETE_DATA, UPDATE_DETAILS } from 'store/constants'
import { MyHeader } from '../MyComponent'
import { addSeparator } from 'utils'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

function Detail() {
  const { detail, dispatchCart, dispatchProduct, setDetail } = React.useContext(
    Context,
  )
  const product = detail.details
  const history = useHistory()

  const addToCart = () => {
    const {
      id,
      product_name,
      product_price,
      image,
      stock,
      description,
    } = product
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

  const onClickEdit = () => {
    setDetail({
      type: UPDATE_DETAILS,
      payload: null,
    })
    history.push('/product')
  }

  const onClickDelete = () => {
    dispatchProduct({
      type: DELETE_DATA,
      payload: product.id,
    })
    history.push('/')
  }

  const classes = useStyles()
  return (
    <>
      <MyHeader />
      <Container className={classes.container}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={product.image}
            title={product.product_name}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {product.product_name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Rp{addSeparator(product.product_price)}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Description:
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                className={classes.justify}
              >
                {product.description}
              </Typography>
            </CardContent>
          </div>
          <div className={classes.controls}>
            <Button variant="outlined" color="primary" onClick={onClickEdit}>
              Edit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={onClickDelete}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.addToCart}
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          </div>
        </Card>
      </Container>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: 'flex',
  },
  cover: {
    width: 360,
    height: 360,
  },
  details: {
    flex: 2,
  },
  controls: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'space-around',
  },
  justify: {
    textAlign: 'justify',
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  addToCart: {
    marginTop: '20px',
  },
}))

export default Detail
