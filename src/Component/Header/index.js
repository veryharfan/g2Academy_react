import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: blue[500],
    // padding: theme.spacing(2),
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    display: 'flex',
    padding: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2)
  }
}))

export default function Header({ children }) {
  const classes = useStyles()
  return (
    <AppBar className={classes.root}>
      <div className={classes.menuButton}>
        <MenuIcon />
        <Typography className={classes.title}>{children}</Typography>
      </div>
    </AppBar>
  )
}

Header.propTypes = {
  children: PropTypes.string
}
