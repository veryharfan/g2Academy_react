import React from 'react'
import { ImgMediaCard } from 'ui-kit/Molecule'
import { connect } from 'react-redux'
import { Header } from 'ui-kit/Organism'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(2)
  }
}))

function HomePage({ product, cart }) {
  const classes = useStyles()
  return (
    <div>
      <Header>Online Shop</Header>
      <Grid container spacing={3} className={classes.container}>
        {product.map(x => (
          <Grid item key={x.id}>
            <ImgMediaCard
              id={x.id}
              name={x.product_name}
              price={x.product_price}
              image={x.image}
              discount={x.discount}
              className={classes.card}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  product: state.product.result,
  cart: state.cart.result
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
