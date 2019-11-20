import React from 'react'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import { useStaticQuery, graphql, Link } from 'gatsby'


const BlogPage = () => {
    const data = useStaticQuery (graphql`
    query {
      allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
    
    `)

    return (
            <Layout>
                <h1>Blog</h1>
                <p>This page will have some thoughts</p>
                <ol className={blogStyles.posts}>
                  {data.allMarkdownRemark.edges.map((edge) => {
                      return (
                              <li className={blogStyles.post}>
                                  <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                  </Link>
                              </li>
                      )
                  })}
                </ol>
            </Layout>
    )
}
export default BlogPage