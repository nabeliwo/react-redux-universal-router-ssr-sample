import React from 'react'
import Users from './Users'

async function action() {
  return {
    title: 'Users',
    description: 'This is Users page',
    component: <Users />
  }
}

export default action
