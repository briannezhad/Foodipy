import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
        <div className="row py-3">
        {posts.map(post => {
          const title = post.title
          const featuredImage = {
            data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
            alt: post.featuredImage?.node?.alt || ``,
          }
          return (
              <div className="col-md-4">
                <article 
                  itemScope
                  itemType="http://schema.org/Article"
                  >
                  <div className="card border-0" key={post.uri}>
                  {/* if we have a featured image for this post let's display it */}
                  {featuredImage?.data && (
                    <GatsbyImage
                      image={featuredImage.data}
                      alt={featuredImage.alt}
                      style={{ marginBottom: 50 }}
                      className="card-img-top"
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to={post.uri} itemProp="url">
                        <span itemProp="headline">{parse(title)}</span>
                      </Link>
                    </h5>
                    <p className="card-text border-bottom pb-2">
                      <section itemProp="description">{parse(post.excerpt)}</section>
                      <small>{post.date}</small>
                    </p>
                    <Link className="btn btn-primary black-button " to={post.uri} itemProp="url">
                      Go to The Recipe
                    </Link>
                  </div>
                </div>
                </article>
              </div>
           
          )
        })}
       </div>

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
              }
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`
