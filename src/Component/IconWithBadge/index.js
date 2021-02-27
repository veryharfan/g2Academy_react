import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'

const classes = {
  icon: {
    margin: 0,
    paddingTop: '16px',
  },
}

function IconWithBadge({ children, badgeCount }) {
  return (
    <IconButton style={classes.icon}>
      <Badge badgeContent={badgeCount} color="secondary">
        {children}
      </Badge>
    </IconButton>
  )
}

export default IconWithBadge
