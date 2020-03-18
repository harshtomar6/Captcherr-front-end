export const isLoggedIn = () => {
  let loggedIn = JSON.parse(localStorage.getItem('@user'));

  if(loggedIn && loggedIn.token && loggedIn.user)
    return true
  
  return false
}