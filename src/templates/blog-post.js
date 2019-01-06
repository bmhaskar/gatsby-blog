import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby'
import PrevNext from '../components/prevnext';
import MetaTags from '../components/Metatags';
import Share from '../components/share';


function BlogPost(props) {

    const {siteUrl: url }  = props.data.site.siteMetadata
     

    const thumbnail = props.data.markdownRemark.frontmatter.image &&
          props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src
    const { title, image, tags} = props.data.markdownRemark.frontmatter;
    const { prev, next } = props.pageContext;

    return (
        <Layout>
            <MetaTags
                title={title}
                description={props.data.markdownRemark.excerpt}
                thumbnail={thumbnail && url + thumbnail}
                url={url}
                pathname={props.location.pathname}
            />
            <div style={{pading: ` 1.48em 0`}}>
                <h1>{title}</h1>
                {image && <Img fluid={image.childImageSharp.fluid} />}
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
            <div style={{padding: `1.48em 0`, borderTop: `1px dashed`}}>
                    <span>Tagged in </span>
                    {tags.map((tag, i) => (
                        <a href={`/${tag}`} key={i} style={{ marginLeft: "10px" }} >{tag}</a>
                    ))}
                </div>
                
                <div style={{padding: `1.48em 0`, borderTop: `1px dashed`}}>
                    <Share title={title} url={url} pathname={props.location.pathname} />
                    </div>
                
                <PrevNext prev={prev && prev.node} next={next && next.node} />
            </div>
        </Layout>
    )
}


export default BlogPost

export const query = graphql`

 query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       excerpt
       frontmatter {
        title
        tags
        image {
          childImageSharp {
            resize(width: 1000, height: 420) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
       }
   }
   site {
    siteMetadata {
        siteUrl
        author
      }
   }
}
`