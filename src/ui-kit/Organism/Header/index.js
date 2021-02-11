import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'
import { SearchBar } from 'ui-kit/Molecule'
import { CartIcon } from 'ui-kit/Atom'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: blue[500],
    padding: `${8}px ${theme.spacing(2)}px`
  },
  menuButton: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  leftBar: {
    display: 'flex',
    padding: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1)
  },
  home: {
    color: 'white',
    textDecoration: 'none'
  }
}))

export default function Header({ children }) {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.root}>
      <div className={classes.menuButton}>
        <Box className={classes.leftBar}>
          <Link to={'/'} className={classes.home}>
            <Typography className={classes.title}>{children}</Typography>
          </Link>
        </Box>
        <SearchBar />
        <CartIcon />
      </div>
    </AppBar>
  )
}

Header.propTypes = {
  children: PropTypes.string
}
