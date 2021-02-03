import React from 'react'
import { Typography, Container } from '@material-ui/core'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'

export default function ProductContent() {
  let { path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route path={`${path}/:topicId`}>
          <Product1 />
        </Route>
        <Route path={`${path}/`}>
          <Container>
            <Typography>Welcome to Product Page</Typography>
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
