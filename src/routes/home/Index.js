import React from 'react'
import Home from './Home'

async function action() {
  return {
    title: 'Home',
    description: 'This is Home page',
    component: <Home />
  }
}

export default action
