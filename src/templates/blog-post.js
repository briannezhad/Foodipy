import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  const featuredImageNextPost = {
    data: next ? next.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData : '',
    alt: next ? next.featuredImage?.node?.alt || `` : '',
  }

  const featuredImagePreviousPost = {
    data: previous ? previous.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData : '',
    alt: previous ? previous.featuredImage?.node?.alt || `` : '',
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
      <main class="main" >
            <section class="mt-60  mb-30">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-9 side-content">
                          <div class="post-single">
                              <div class="post-single-image">
                                {/* if we have a featured image for this post let's display it */}
                                    {featuredImage?.data && (
                                      <GatsbyImage
                                        image={featuredImage.data}
                                        alt={featuredImage.alt}
                                      />
                                    )}
                              </div>
                              <div class="post-single-content">
                                  <a href="#" class="categorie">{post.categories.nodes[0].name}</a> 
                                  <h3 class="title" itemProp="headline">{parse(post.title)}</h3>
                                  <ul class="entry-meta list-inline">
                                      <li class="post-author-img"><a href="author.html"></a></li>
                                      <li class="post-author"><a href="#">By {post.author.node.name}</a> </li>
                                      <li class="post-date"> <span class="dot"></span> {post.date}</li>
                                      {/* <li class="post-timeread"> <span class="dot"></span> 15 min Read</li>
                                      <li class="post-comment"> <span class="dot"></span> 2 comments</li> */}
                                  </ul>
                              </div>
                              <div class="post-single-body">
                              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5373069496163959" crossorigin="anonymous"></script>
                                <ins class="adsbygoogle"
                                    style={{display: 'block'}}
                                    data-ad-client="ca-pub-5373069496163959"
                                    data-ad-slot="3093909535"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"></ins>
                                <script>
                                    (adsbygoogle = window.adsbygoogle || []).push({});
                                </script>
                                {!!post.content && (
                                  <section itemProp="articleBody">{parse(post.content)}</section>
                                )}
                              </div>
                          </div>
                          <div class="row">
                          {previous && (
                            <Link to={previous.uri} rel="next" className="col-md-6">
                              
                              <div class="widget">
                                  <div class="widget-next-post">
                                      <div class="post-item">
                                          <div class="image">
                                          {featuredImageNextPost?.data && (
                                            <GatsbyImage
                                              image={featuredImagePreviousPost.data}
                                              alt={featuredImagePreviousPost.alt}
                                            />
                                          )}
                                          </div>
                                          <div class="content">
                                              <Link to={previous.uri} rel="prev" className="btn-link"><i class="fas fa-arrow-left"></i>Previous Post</Link>
                                              <p class="entry-title"><Link to={previous.uri} rel="prev">{parse(previous.title)}</Link></p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                          )}
                          {next && (
                          <Link to={next.uri} rel="next" className="col-md-6">
                            <div class="widget">
                                <div class="widget-previous-post">
                                    <div class="post-item">
                                        <div class="image">
                                          {featuredImagePreviousPost?.data && (
                                            <GatsbyImage
                                              image={featuredImageNextPost.data}
                                              alt={featuredImageNextPost.alt}
                                            />
                                          )}
                                        </div>
                                        
                                        <div class="content">
                                            <Link to={next.uri} rel="next" className="btn-link"><i class="fas fa-arrow-right"></i>next post</Link>
                                            <p class="entry-title"><Link to={next.uri} rel="next">{parse(next.title)}</Link></p>
                                          
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                          </Link>
                          )}
                          </div>
                        </div>
                        <div class="col-xl-3 max-width side-sidebar">
                          <div class="widget">
                              <div class="widget-author">
                                  <div class="author-img">
                                      <a href="author.html" class="image">
                                          {/* <img src="assets/img/author/1.jpg" alt=""> */}
                                      </a>
                                  </div>
                                  <div class="author-content">
                                      <h6 class="name">Welcome to {post.author.node.name}</h6>
                                      <p class="bio">
                                      {post.author.node.name} is a food blog that features a wide range of recipes and cooking tips for all levels of culinary experience.
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div class="widget">
                              <div class="section-title">
                                  <h5>ads</h5>
                              </div>
                              <div class="widget-ads">
                              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5373069496163959"
                                  crossorigin="anonymous"></script>
                                <ins class="adsbygoogle"
                                  style={{display: 'block'}}
                                  data-ad-client="ca-pub-5373069496163959"
                                  data-ad-slot="5975223746"
                                  data-ad-format="auto"
                                  data-full-width-responsive="true"></ins>
                              <script>
                                (adsbygoogle = window.adsbygoogle || []).push({});
                              </script>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
      </main>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      categories {
        nodes {
          name
        }
      }
      author {
        node {
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
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
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
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
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
    }
  }
`
