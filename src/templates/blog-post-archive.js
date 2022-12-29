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
        <main class="main">
        <section class="mt-90">
        <div className="container-fluid">
        <div className="row">
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
            class="col-xl-4 col-lg-6 col-md-6 masonry-item" key={post.uri}
            >
                  <div class="post-card ">
                      <div class="post-card-image">
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
                      <div class="post-card-content">
                          <div class="entry-cat">
                              <a href="blog-grid.html" class="categorie"> {post.categories.nodes[0].name}</a>
                              </div>

                              <h5 class="entry-title">
                              <Link to={post.uri} itemProp="url">
                                <span itemProp="headline">{parse(title)}</span>
                              </Link>
                              </h5>

                          <div class="post-exerpt">
                              <p><section itemProp="description" className="archive-card-text">{parse(post.excerpt)}</section></p>
                          </div>

                          <ul class="entry-meta list-inline">
                              {/* <li class="post-author-img"><a href="author.html"> </a></li>
                              <li class="post-author"><a href="author.html">David Smith</a> </li> */}
                              <li class="post-date"> <span class="dot"></span>  {post.date}</li>
                          </ul>
                      </div>
                  </div>

           

                   {/* <!--pagination--> */}
                   {/* <div class="row">
                       <div class="col-lg-12">
                           <div class="pagination ">
                               <ul class="list-inline">
                                   <li class="active"> <a href="#">1</a></li>
                                   <li><a href="#">2</a></li>
                                   <li><a href="#">3</a></li>
                                   <li><a href="#">4</a></li>
                                   <li><a href="#"><i class="fas fa-arrow-right"></i></a></li>
                               </ul>
                           </div>   
                       </div>
                   </div> */}
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
