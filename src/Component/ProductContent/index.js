import React from 'react'
import { Typography, Container } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import { CreateProduct, ProductList } from 'Pages'

export default function ProductContent() {
  let { url, path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route path={`${path}/create`}>
          <Container>
            <CreateProduct />
          </Container>
        </Route>
        <Route path={`${path}/list`}>
          <Container>
            <ProductList />
          </Container>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Product1 />
        </Route>
        <Route path={`${path}/`}>
          <Container>
            <Typography>Welcome to Product Page</Typography>
            <Link to={`${url}/create`}>
              <Add />
              <Typography>Create Product</Typography>
            </Link>
            <Link to={`${url}/list`}>
              <Typography>Product List</Typography>
            </Link>
          </Container>
        </Route>
      </Switch>
    </>
  )
}

function Product1() {
  let { topicId } = useParams()
  return (
    <>
      <Container>
        <Typography>Product : {topicId}</Typography>
      </Container>
    </>
  )
}
