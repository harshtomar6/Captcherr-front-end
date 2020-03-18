import {navigate} from 'gatsby'

export const isLoggedIn = () => {
  let loggedIn = JSON.parse(localStorage.getItem('@user'));

  if(loggedIn && loggedIn.token && loggedIn.user)
    return true
  
  return false
}

export const getLoggedInUser = () => {
  let loggedIn = JSON.parse(localStorage.getItem('@user'));

  if(!loggedIn)
    return false

  return loggedIn
}

export const _handleLogout = () => {
  localStorage.removeItem('@user');
  navigate('/')
}