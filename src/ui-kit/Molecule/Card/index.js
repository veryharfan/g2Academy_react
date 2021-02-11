import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem, updateItem, deleteItem } from 'action'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import TextField from '@material-ui/core/TextField'

const useStyles = {
  root: {
    maxWidth: 300
  },
  num: {
    maxWidth: '50px',
    textAlign: 'center'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center'
  },
  discount: {
    textDecoration: 'line-through'
  }
}

class ImgMediaCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: 0
    }
    this.onChangeItem = this.onChangeItem.bind(this)
    this.onClickAdd = this.onClickAdd.bind(this)
    this.onClickRemove = this.onClickRemove.bind(this)
  }

  onChangeItem(e) {
    this.setState({ item: e.target.value })
  }

  onClickAdd() {
    if (this.state.item === 0) {
      const { id, name, price, image, discount } = this.props
      this.props.addItem({
        product_id: id,
        count: this.state.item + 1,
        total_price: (this.state.item + 1) * (price - (price * discount) / 100),
        product_name: name,
        product_price: price,
        discount,
        image
      })
    } else {
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
    }
    this.setState({ item: this.state.item + 1 })
  }

  onClickRemove() {
    if (this.state.item === 1) {
      this.props.delItem(this.props.id)
    } else {
      const { id, name, price, image, discount } = this.props
      this.props.update({
        product_id: id,
        count: this.state.item - 1,
        total_price: (this.state.item - 1) * (price - (price * discount) / 100),
        product_name: name,
        product_price: price,
        discount,
        image
      })
    }
    this.setState({ item: this.state.item - 1 })
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
    const { name, price, image, discount } = this.props
    const discount_price = price - (price * discount) / 100

    return (
      <Card style={useStyles.root}>
        <CardActionArea>
          <CardMedia component="img" height="260" image={image} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" component="p">
              {discount_price.toLocaleString()}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={useStyles.discount}
            >
              {price.toLocaleString()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={useStyles.cardActions}>
          <IconButton
            onClick={this.onClickRemove}
            disabled={this.state.item === 0}
          >
            <Remove />
          </IconButton>
          <div>
            <TextField
              value={this.state.item}
              onChange={this.onChangeItem}
              style={useStyles.num}
            />
          </div>
          <IconButton onClick={this.onClickAdd}>
            <Add />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.result,
  total: state.cart.total
})

const mapDispatchToProps = dispatch => ({
  addItem: payload => dispatch(addItem(payload)),
  update: payload => dispatch(updateItem(payload)),
  delItem: payload => dispatch(deleteItem(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ImgMediaCard)
