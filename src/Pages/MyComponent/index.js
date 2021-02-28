import React from 'react'
import { Header, SearchBar, IconWithBadge } from 'Component'
import { Context } from 'store'
import { Link, useHistory } from 'react-router-dom'
import { signInWithGoogle, auth } from 'service'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Add from '@material-ui/icons/Add'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { makeStyles } from '@material-ui/core/styles'

export function MyHeader() {
  const { setUser, user, cart } = React.useContext(Context)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setUser(null)
    localStorage.removeItem('token')
  }

  const history = useHistory()

  const createProduct = () => {
    history.push('/product')
  }

  const searchProduct = e => {
    e.preventDefault()
    return
  }

  const handleLogin = () => {
    signInWithGoogle()
    auth.currentUser
      .getIdToken(true)
      .then(res => {
        localStorage.setItem('token', res)
        const parseJWT = JSON.parse(atob(res.split('.')[1]))
        setUser({ name: parseJWT.name, email: parseJWT.email })
      })
      .catch(err => console.error(err))
  }

  function displayUser() {
    if (user)
      return (
        <>
          <Button
            variant="outlined"
            onClick={handleClick}
            className={[classes.button, classes.textTransform]}
          >
            {user.name}
          </Button>
          <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Log out</MenuItem>
          </Menu>
        </>
      )
    else {
      return (
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={handleLogin}
          disableElevation
          onFocus={classes.onFocus}
          hidden={true}
        >
          Sign In with google
        </Button>
      )
    }
  }

  function displayCreateProduct() {
    if (user) {
      return (
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          startIcon={<Add />}
          onClick={createProduct}
          disableElevation
          onFocus={classes.onFocus}
        >
          Create Product
        </Button>
      )
    }
  }

  const classes = useStyles()

  return (
    <>
      <Header>
        <Link to="/" className={classes.link}>
          <Typography>Online Shop</Typography>
        </Link>
        <SearchBar
          prefix="Search :"
          placeholder="input keyword"
          onClick={searchProduct}
        />
        {displayCreateProduct()}
        <div className={classes.flex}>
          <IconWithBadge badgeCount={cart.result.length}>
            <Link to="/checkout" className={classes.link}>
              <ShoppingCart />
            </Link>
          </IconWithBadge>
          <div className={classes.space} />
          {displayUser()}
        </div>
      </Header>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  button: {
    color: 'white',
    borderColor: 'white',
    '&:hover': {
      backgroundColor: '#4f61c5',
      borderColor: 'white',
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  border: {
    border: '1px solid white',
    padding: '5px 15px',
    borderRadius: 5,
  },
  space: {
    margin: '0.5rem',
  },
  textTransform: {
    textTransform: 'none',
  },
}))
