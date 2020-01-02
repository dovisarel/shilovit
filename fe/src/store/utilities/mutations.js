export function commitInitialData (state, payload) {
  state.isAuth = payload.isAuth
  state.csrfToken = payload.csrfToken
  state.isAdmin = payload.isAdmin || false
  state.user = payload.user || {}
}
