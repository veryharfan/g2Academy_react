import React from 'react'
import PropTypes from 'prop-types'
import { Header, Sidebar } from '../Component'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    marginTop: theme.spacing(8)
  }
}))

export default function Template({ children, title, products }) {
  const classes = useStyles()
  return (
    <>
      <Header>{title}</Header>
      <div className={classes.body}>
        <Sidebar products={products} />
        {children}
      </div>
    </>
  )
}

Template.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string
}
