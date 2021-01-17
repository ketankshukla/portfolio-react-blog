import React from 'react'

const ArticlePage = ({match}) => {
  const name = match.params.name
  return (
    <div>
      <h1>This is the {name} article</h1>
    </div>
  )
}

export default ArticlePage
