import home from './home'
import users from './users'

const routes = {
  path: '/',

  children: [
    {
      path: '/',
      action: home
    },
    {
      path: '/users',
      action: users
    }
  ],

  async action({ next }) {
    const route = await next()

    route.title = `${route.title || 'Untitled Page'} - SSR Sample`
    route.description = route.description || ''

    return route
  }
}

export default routes
