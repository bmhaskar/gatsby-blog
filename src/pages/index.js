import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import './post.css';

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (<Layout>
    <SEO title="Home" keywords={[`bmhaskar`,`Bharat Mhaskar`,`gatsby`, `application`, `react`]} />
    {postList.edges.map(({ node }, i) => (
        <React.Fragment  key={i}>
        <Link to={node.fields.slug} className="link" >
          <div className="post-list">
            <h2>{node.frontmatter.title}</h2>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
        <hr />
        </React.Fragment>
        
      ))}
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>)
}

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
