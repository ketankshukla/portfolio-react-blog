import React from 'react'
import articleContent from './article-content'
import {Link} from 'react-router-dom'

const ArticlesList = () => {
  return (
    <div>
      <h1>Articles</h1>
      {articleContent.map((article) => (
        <Link to={`/article/${article.name}`}>
          <h3>{article.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default ArticlesList
