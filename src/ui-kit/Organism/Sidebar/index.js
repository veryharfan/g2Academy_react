import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import { Home as HomeIcon, Chat as ChatIcon, Inbox } from '@material-ui/icons'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    marginTop: theme.spacing(6),
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
  },
  primary: {
    color: grey[900],
    textDecorationLine: 'none',
    cursor: 'default'
  },
  listText: {
    paddingLeft: theme.spacing(2)
  }
}))

export default function Sidebar({ products }) {
  const classes = useStyles()
  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerContainer}>
        <List>
          <Link to='/home' className={classes.primary}>
            <ListItem button>
              <HomeIcon />
              <ListItemText primary='Home' className={classes.listText} />
            </ListItem>
            <Divider />
          </Link>
          <Link to='/chat' className={classes.primary}>
            <ListItem button>
              <ChatIcon />
              <ListItemText primary='Chat' className={classes.listText} />
            </ListItem>
            <Divider />
          </Link>
          <Link to='/product' className={classes.primary}>
            <ListItem button>
              <Inbox />
              <ListItemText primary='Product' className={classes.listText} />
            </ListItem>
            <Divider />
            {products}
          </Link>
        </List>
      </div>
    </Drawer>
  )
}
