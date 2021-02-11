import React from 'react'
import { connect } from 'react-redux'
import { updateItem, deleteItem } from 'action'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Delete from '@material-ui/icons/Delete'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import TextField from '@material-ui/core/TextField'

const useStyles = {
  root: {
    display: 'flex',
    margin: '16px',
    maxHeight: 160
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%'
  },
  content: {
    flex: '1 0 auto',
    padding: '0px',
    paddingLeft: '16px'
  },
  cover: {
    width: 160
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '8px'
  },
  discount: {
    textDecoration: 'line-through'
  },
  totalPrice: {
    textAlign: 'right'
  }
}

class MediaControlCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: 0
    }
    this.onChangeItem = this.onChangeItem.bind(this)
    this.onClickAdd = this.onClickAdd.bind(this)
    this.onClickRemove = this.onClickRemove.bind(this)
    this.onClickDelete = this.onClickDelete.bind(this)
  }

  onChangeItem(e) {
    this.setState({ item: e.target.value })
  }

  onClickAdd() {
    const { id, name, price, image, discount } = this.props
    this.props.update({
      product_id: id,
      count: this.state.item + 1,
      total_price: (this.state.item + 1) * (price - (price * discount) / 100),
      product_name: name,
      product_price: price,
      discount,
      image
    })
    this.setState({ item: this.state.item + 1 })
  }

  onClickRemove() {
    const { id, name, price, image, discount } = this.props
    console.log(this.props.id)

    this.props.update({
      product_id: id,
      count: this.state.item - 1,
      total_price: (this.state.item - 1) * (price - (price * discount) / 100),
      product_name: name,
      product_price: price,
      discount,
      image
    })
    this.setState({ item: this.state.item - 1 })
  }

  onClickDelete() {
    this.props.delItem(this.props.id)
  }

  componentDidMount() {
    const cartProduct = this.props.cart.filter(
      x => x.product_id === this.props.id
    )
    if (cartProduct.length) {
      this.setState({ item: cartProduct[0].count })
    }
  }

  render() {
    const { image, name, price, discount } = this.props
    const discount_price = price - (price * discount) / 100
    return (
      <Card style={useStyles.root}>
        <CardMedia style={useStyles.cover} image={image} title={name} />
        <div style={useStyles.details}>
          <CardContent style={useStyles.content}>
            <Typography component="h5" variant="h5">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={useStyles.discount}
            >
              Rp. {price.toLocaleString()}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Rp. {discount_price.toLocaleString()}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={useStyles.totalPrice}
            >
              Rp. {(this.state.item * discount_price).toLocaleString()}
            </Typography>
          </CardContent>
          <div style={useStyles.controls}>
            <IconButton aria-label="delete" onClick={this.onClickDelete}>
              <Delete />
            </IconButton>
            <IconButton
              onClick={this.onClickRemove}
              disabled={this.state.item === 1}
            >
              <Remove />
            </IconButton>
            <TextField
              value={this.state.item}
              onChange={this.onChangeItem}
              style={useStyles.itemNumber}
            />
            <IconButton onClick={this.onClickAdd}>
              <Add />
            </IconButton>
          </div>
        </div>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.result
})

const mapDispatchToProps = dispatch => ({
  update: payload => dispatch(updateItem(payload)),
  delItem: payload => dispatch(deleteItem(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(MediaControlCard)
