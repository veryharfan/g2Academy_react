import React from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    height: 36,
    borderRadius: 5,
  },
  p1: {
    padding: theme.spacing(1),
  },
  input: {
    flex: 1,
    margin: theme.spacing(1),
  },
}))

function SearchBar({ prefix, placeholder, onClick }) {
  const [state, setState] = React.useState('')
  const classes = styles()

  return (
    <Paper component="form" className={classes.root}>
      <Typography className={classes.p1}>{prefix}</Typography>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        onChange={e => setState(e.target.value)}
      />
      <IconButton
        type="submit"
        className={classes.p1}
        aria-label="search"
        onClick={e => onClick(e, state)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
