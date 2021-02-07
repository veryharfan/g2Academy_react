import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { addProduct, updateProduct } from 'action'
import { Link } from 'react-router-dom'

class CreateProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      stock: '',
      desc: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onAdd = this.onAdd.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onAdd() {
    this.props.add({
      id: this.props.newId,
      name: this.state.name,
      price: this.state.price,
      stock: this.state.stock,
      desc: this.state.desc
    })
    this.setState({
      name: '',
      price: '',
      stock: '',
      desc: ''
    })
  }

  onUpdate() {
    this.props.update({
      id: this.props.product_to_update.id,
      name: this.state.name,
      price: this.state.price,
      stock: this.state.stock,
      desc: this.state.desc
    })
    this.setState({
      name: '',
      price: '',
      stock: '',
      desc: ''
    })
  }

  componentDidMount() {
    if (this.props.product_to_update) {
      const { name, price, stock, desc } = this.props.product_to_update
      this.setState({ name, price, stock, desc })
    }
  }

  render() {
    const classes = {
      input: {
        margin: '15px',
        width: 600
      },
      goToList: {
        marginTop: 150,
        textDecoration: 'none'
      }
    }
    return (
      <>
        <TextField
          label="Product Name"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
          style={classes.input}
          required
        />
        <TextField
          label="Price"
          name="price"
          value={this.state.price}
          onChange={this.onChange}
          style={classes.input}
          required
        />
        <TextField
          label="Stock"
          name="stock"
          value={this.state.stock}
          onChange={this.onChange}
          style={classes.input}
          required
        />
        <TextField
          label="Description"
          name="desc"
          value={this.state.desc}
          multiline
          onChange={this.onChange}
          style={classes.input}
        />
        <div hidden={Boolean(this.props.product_to_update)}>
          <Button variant="contained" color="primary" onClick={this.onAdd}>
            Add Product
          </Button>
        </div>
        <div hidden={!Boolean(this.props.product_to_update)}>
          <Link to={`/product/list`}>
            <Button variant="contained" color="primary" onClick={this.onUpdate}>
              Update Product
            </Button>
          </Link>
        </div>

        <Link to={`/product/list`}>
          <Button variant="outlined" color="primary" style={classes.goToList}>
            Show Product
          </Button>
        </Link>
      </>
    )
  }
}

const mapStateToProps = state => ({
  newId: state.product.newId,
  product: state.product.result,
  product_to_update: state.product.product_to_update
})

const mapDispatchToProps = dispatch => ({
  add: payload => dispatch(addProduct(payload)),
  update: payload => dispatch(updateProduct(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)
