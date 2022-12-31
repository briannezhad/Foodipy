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
        <Seo title="Discover delicious recipes and foodie tips for every occasion." />
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
      <Seo title="Discover delicious recipes and foodie tips for every occasion" />
      <main className="main">
        <section className="mt-90">
          <div className="container-fluid">
            <div className="row mb-5"><h3>Latest Recipes</h3> <hr className="mt-3 mb-1"/></div>
            <div className="row mt-4">
              {posts.map(post => {
                  const title = post.title
                  const featuredImage = {
                    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
                    alt: post.featuredImage?.node?.alt || ``,
                  }
                  return (
                    <article 
                    itemScope
                    itemType="http://schema.org/Article"
                    className="col-xl-4 col-lg-6 col-md-6 masonry-item" key={post.uri}
                    >
                          <div className="post-card ">
                              <div className="post-card-image">
                              <Link to={post.uri} itemProp="url">
                                    {/* if we have a featured image for this post let's display it */}
                                    {featuredImage?.data && (
                                      <GatsbyImage
                                        image={featuredImage.data}
                                        alt={featuredImage.alt}
                                        style={{ marginBottom: 10 }}
                                        className="card-img-top"
                                      />
                                    )}
                                </Link>
                              </div>
                              <div className="post-card-content">
                                  <div className="entry-cat">
                                      <a href="#" className="categorie"> {post.categories.nodes[0].name}</a>
                                      </div>

                                      <h5 className="entry-title">
                                      <Link to={post.uri} itemProp="url">
                                        <span itemProp="headline">{parse(title)}</span>
                                      </Link>
                                      </h5>

                                  <div className="post-exerpt">
                                      <p><section itemProp="description" className="archive-card-text">{parse(post.excerpt)}</section></p>
                                  </div>

                                  <ul className="entry-meta list-inline">
                                    {console.log(post)}
                                      {/* <li className="post-author-img"><a href="author.html"> </a></li>*/}
                                      <li className="post-author">{post.author.node.name} </li>
                                      <li className="post-date"> <span className="dot"></span>  {post.date}</li>
                                  </ul>
                              </div>
                          </div>
                    </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>

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
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
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
