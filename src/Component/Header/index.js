import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'

function Header({ children }) {
  const classes = styles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.appbar}>{children}</Toolbar>
    </AppBar>
  )
}

const styles = makeStyles(theme => ({
  appbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}))

export default Header
