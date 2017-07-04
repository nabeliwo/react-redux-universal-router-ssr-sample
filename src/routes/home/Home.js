import React from 'react'
import Link from '../../components/Link'

const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <ul>
        <li>
          <Link to="/users">to users</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Home
