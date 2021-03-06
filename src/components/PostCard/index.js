/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import Link from 'gatsby-link'

const PostCard = ({posts}) => {
  return (
    <div className='container'>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({node: post}) => (
          <div
            className='content'
            style={{border: '1px solid #eaecee', padding: '2em 4em'}}
            key={post.id}
          >
            <p>
              <Link className='has-text-primary' to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className='button is-small' to={post.fields.slug}>
                                Lire →
              </Link>
            </p>
          </div>
        ))}
    </div>
  )
}

export default PostCard
