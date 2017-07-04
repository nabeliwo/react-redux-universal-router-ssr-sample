import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import configureStore from './store/configureStore'
import router from './router'
import App from './components/App'

async function startApp() {
  const initialState = JSON.parse(document.getElementById('initial-state').getAttribute('data-json'))
  const history = createBrowserHistory()
  const store = configureStore(initialState, history)
  const route = await router.resolve({ path: location.pathname })

  render(
    <Provider store={store}>
      <App router={router} history={history}>{route.component}</App>
    </Provider>,
    document.getElementById('app')
  )
}

startApp()
