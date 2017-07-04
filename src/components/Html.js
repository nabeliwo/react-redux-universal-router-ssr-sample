import React from 'react'

class Html extends React.PureComponent {
  render() {
    const { title, description, children, initialState } = this.props

    return (
      <html>
        <head>
          <meta name="description" content={description} />
          <title>{title}</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script id="initial-state" type="text/plain" data-json={JSON.stringify(initialState)} />
          <script src="/client.js" />
        </body>
      </html>
    )
  }
}

export default Html
