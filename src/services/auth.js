import {navigate} from 'gatsby'

export const isLoggedIn = () => {
  if(typeof window !== 'undefined') {
    let loggedIn = JSON.parse(localStorage.getItem('@user'));
    
    if(loggedIn && loggedIn.token && loggedIn.user)
      return true
    
    return false
  }
}

export const getLoggedInUser = () => {
  if(typeof window !== 'undefined') {
    let loggedIn = JSON.parse(localStorage.getItem('@user'));
    
    if(!loggedIn)
    return false
    
    return loggedIn
  } 
}

export const _handleLogout = () => {
  if(typeof window !== 'undefined') {
    localStorage.removeItem('@user');
    navigate('/')
  }
}