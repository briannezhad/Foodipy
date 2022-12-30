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
  const getFeaturedPosts = []

  data.allWpPost.nodes.map(post=>{

    const featuredImage = {
      data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
      alt: post.featuredImage?.node?.alt || ``,
    }
    
    post.categories.nodes.forEach(category => {
      console.log(category)
      if(category.name === 'Featured'){
        getFeaturedPosts.push({
          title: post.title,
          excerpt: post.excerpt,
          date: post.date,
          image: featuredImage,
          uri: post.uri,
          category: 'Featured'
        })
      }
    });
  })
  console.log(getFeaturedPosts)

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

        <div className="slider-style2">
            <div  className="swiper swiper-top">
                <div className="swiper-wrapper">
                {getFeaturedPosts.map(post => {
                    return(
                      <div className="swiper-slide slider-item" style={{backgroundImage: `url(${post.image.data.images.fallback.src})`}} key={post.uri}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-7 col-lg-9 col-md-12">
                                    <div className="slider-item-inner">
                                        <div className="slider-item-content">
                                        <div className="entry-cat ">
                                            <Link href="#" className="categorie">{post.category} </Link> 
                                        </div>
                                        <h1 className="entry-title">
                                            <Link to={post.uri}>{parse(post.title)}</Link>
                                        </h1>
                                        <ul className="entry-meta list-inline">
                                            <li className="post-author-img"><a href="author.html"> 
                                            {/* <img src="assets/img/author/1.jpg" alt=""> */}
                                              </a></li>
                                            <li className="post-date"> <span className="dot"></span>  {post.date}</li>
                                            {/* <li className="post-timeread"> <span className="dot"></span> 15 min Read</li>
                                            <li className="post-comment"> <span className="dot"></span> 2 comments</li> */}
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    )
                })}
                </div>
            </div>

            <div thumbsSlider="" className="swiper swiper-bottom container-fluid" >
                <div className="swiper-wrapper ">
                {getFeaturedPosts.map(post => {
                    return(
                      <div className="swiper-slide">
                        <div className="post-item">
                            <img src={post.image.data.images.fallback.src}  alt="" />
                            <div className="details">
                                <p className="entry-title"> 
                                    <span>{post.title}</span>
                                    </p>
                                <ul className="entry-meta list-inline">
                                    <li className="post-date"> <i className="fas fa-clock"></i> {post.date}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    )
                  })
              }  
                </div>
            </div>      
        </div>

        <section className="mt-90">
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
                              <a href="blog-grid.html" className="categorie"> {post.categories.nodes[0].name}</a>
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
                              {/* <li className="post-author-img"><a href="author.html"> </a></li>
                              <li className="post-author"><a href="author.html">David Smith</a> </li> */}
                              <li className="post-date"> <span className="dot"></span>  {post.date}</li>
                          </ul>
                      </div>
                  </div>

           

                   {/* <!--pagination--> */}
                   {/* <div className="row">
                       <div className="col-lg-12">
                           <div className="pagination ">
                               <ul className="list-inline">
                                   <li className="active"> <a href="#">1</a></li>
                                   <li><a href="#">2</a></li>
                                   <li><a href="#">3</a></li>
                                   <li><a href="#">4</a></li>
                                   <li><a href="#"><i className="fas fa-arrow-right"></i></a></li>
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
