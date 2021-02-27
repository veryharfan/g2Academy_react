import React from 'react'
import { addSeparator } from 'utils'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Delete from '@material-ui/icons/Delete'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    margin: '16px',
    maxHeight: 160,
  },
  details: {
    alignItems: 'center',
    flex: 1,
  },
  content: {
    padding: '10px',
    paddingLeft: '16px',
  },
  cover: {
    width: 160,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '8px',
  },
  totalPrice: {
    textAlign: 'right',
  },
}))

function CheckoutCard({ cart, onClickAdd, onClickDelete, onClickMin }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={cart.image}
        title={cart.product_name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {cart.product_name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Rp{addSeparator(cart.product_price)}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.totalPrice}
          >
            Rp{addSeparator(cart.total_price)}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton onClick={() => onClickDelete(cart)}>
            <Delete />
          </IconButton>
          <IconButton
            onClick={() => onClickMin(cart)}
            disabled={cart.quantity === 1}
          >
            <Remove />
          </IconButton>
          <p className={classes.itemNumber}>{cart.quantity}</p>
          <IconButton onClick={() => onClickAdd(cart)}>
            <Add />
          </IconButton>
        </div>
      </div>
    </Card>
  )
}

export default CheckoutCard
