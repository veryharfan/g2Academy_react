import React, { useState } from 'react'
import { MyHeader } from '../MyComponent'
import { TextField, Button, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Context } from 'store'
import { ADD_DATA, UPDATE_DATA, FINISH_UPDATE } from 'store/constants'
import { useHistory } from 'react-router-dom'

function Product() {
  const { dispatchProduct, detail, setDetail } = React.useContext(Context)

  const history = useHistory()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stocks, setStocks] = useState('')
  const [desc, setDesc] = useState('')
  const [images, setImages] = useState('')

  React.useEffect(() => {
    console.log(detail.toUpdate)
    if (detail.toUpdate) {
      const {
        product_name,
        product_price,
        image,
        description,
        stock,
      } = detail.details
      setName(product_name)
      setPrice(product_price)
      setImages(image)
      setStocks(stock)
      setDesc(description)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onAdd = () => {
    if (name && price && stocks && images) {
      dispatchProduct({
        type: ADD_DATA,
        payload: {
          id: Date.now(),
          product_name: name,
          product_price: price,
          image: images,
          description: desc,
          stock: stocks,
        },
      })
      history.push('/')
    } else {
      alert('Please fill empy field')
    }
  }

  const onUpdate = () => {
    if (name && price && stocks && images) {
      dispatchProduct({
        type: UPDATE_DATA,
        payload: {
          id: detail.details.id,
          product_name: name,
          product_price: price,
          image: images,
          description: desc,
          stock: stocks,
        },
      })
      setDetail({
        type: FINISH_UPDATE,
        payload: null,
      })
      history.push('/')
    } else {
      alert('Please fill empy field')
    }
  }

  const toUpdate = () => {
    if (detail.toUpdate) {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={onUpdate}
          className={classes.button}
        >
          Update Product
        </Button>
      )
    } else {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={onAdd}
          className={classes.button}
        >
          Add Product
        </Button>
      )
    }
  }

  const classes = useStyles()

  return (
    <>
      <MyHeader />
      <Container className={classes.container}>
        <TextField
          label="Product Name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={classes.input}
          required
        />
        <TextField
          label="Price"
          name="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className={classes.input}
          required
        />
        <TextField
          label="Image"
          name="image"
          value={images}
          onChange={e => setImages(e.target.value)}
          className={classes.input}
          required
        />
        <TextField
          label="Stock"
          name="stock"
          value={stocks}
          onChange={e => setStocks(e.target.value)}
          className={classes.input}
          required
        />
        <TextField
          label="Description"
          name="desc"
          multiline
          value={desc}
          onChange={e => setDesc(e.target.value)}
          className={classes.input}
        />
        {toUpdate()}
        {/* <Button
          variant="contained"
          color="primary"
          onClick={onAdd}
          className={classes.button}
        >
          Add Product
        </Button> */}
      </Container>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '50%',
  },
  button: {
    margin: '20px auto',
  },
}))

export default Product
