import React from 'react'
import Template from '../../Template'
import { ProductContent } from '../../Component'
import { Link, useRouteMatch } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

export default function ProductPage() {
  return (
    <>
      <Template title='Product' products={<Products />}>
        <ProductContent />
      </Template>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  secondary: {
    color: grey[900],
    textDecorationLine: 'none',
    cursor: 'default'
  },
  listText: {
    paddingLeft: theme.spacing(6),
    fontSize: '14px'
  }
}))

function Products() {
  let { url } = useRouteMatch()
  const classes = useStyles()
  return (
    <div>
      <Link to={`${url}/1`} className={classes.secondary}>
        <ListItem button>
          <ListItemText primary='Product 1' className={classes.listText} />
        </ListItem>
      </Link>
      <Link to={`${url}/2`} className={classes.secondary}>
        <ListItem button>
          <ListItemText primary='Product 2' className={classes.listText} />
        </ListItem>
      </Link>
    </div>
  )
}
