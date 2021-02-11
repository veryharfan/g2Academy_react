import React from 'react'

import Search from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import grey from '@material-ui/core/colors/grey'

const classes = {
  searchBar: {
    display: 'flex'
  },
  searchBox: {
    fontSize: 16
  },
  icon: {
    margin: 0,
    borderRadius: '4px',
    color: grey[200]
  }
}

function SearchBar() {
  return (
    <div styles={classes.searchBar}>
      <TextField
        variant="outlined"
        style={classes.searchBox}
        margin="dense"
        size="small"
        placeholder="Search Product"
      />
      <IconButton style={classes.icon}>
        <Search />
      </IconButton>
    </div>
  )
}

export default SearchBar
