import path from 'path'
import express from 'express'
import PrettyError from 'pretty-error'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'

import configureStore from './store/configureStore'
import router from './router'
import App from './components/App'
import Html from './components/Html'

const app = express()
const PORT = process.env.PORT || 3000

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, '../public')))

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const history = createMemoryHistory({ initialEntries: [req.path] })
    const store = configureStore({}, history)
    const route = await router.resolve({
      path: req.path,
      query: req.query
    })
    .catch(err => { throw new Error(err) })

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect)
      return
    }

    const data = Object.assign({}, route, {
      children: ReactDOM.renderToString(
        <Provider store={store}>
          <App router={router} history={history}>{route.component}</App>
        </Provider>
      ),
      initialState: store.getState()
    })

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />)
    res.status(route.status || 200)
    res.send(`<!doctype html>${html}`)
  } catch (err) {
    next(err)
  }
})

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError()
pe.skipNodeFiles()
pe.skipPackage('express')

app.use((err, req, res, next) => {
  console.error(`access: ${req.url}`)
  console.error(pe.render(err))
  res.status(err.status || 500)
  res.send(`<!doctype html><body>error</body></html>`)
})

//
// Launch the server
// -----------------------------------------------------------------------------
app.listen(PORT, () => {
  console.info(`The server is running at http://localhost:${PORT}/`)
})

export default app
