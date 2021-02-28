import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import { addSeparator } from 'utils'

const useStyles = {
  root: {
    maxWidth: 300,
  },
  num: {
    maxWidth: '50px',
    textAlign: 'center',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: '8px',
  },
}

function ProductCard({ data, onClick, onClickCard, hideAction }) {
  function hideActions() {
    if (!hideAction) {
      return (
        <Button
          variant="contained"
          color="secondary"
          style={useStyles.button}
          startIcon={<AddShoppingCart />}
          onClick={() => onClick(data)}
        >
          Add to cart
        </Button>
      )
    }
  }
  return (
    <Card style={useStyles.root}>
      <CardActionArea onClick={() => onClickCard(data)}>
        <CardMedia
          component="img"
          height="260"
          image={data.image}
          title={data.product_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {data.product_name}
          </Typography>
          <Typography variant="body2" component="p">
            Rp{addSeparator(data.product_price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={useStyles.cardActions}>{hideActions()}</CardActions>
    </Card>
  )
}

export default ProductCard
