import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="container-fluid" data-is-root-path={isHomePage}>
      <header className="nav border-bottom">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            <h1 className="main-heading">
              <Link to="/">{parse(title)}</Link>
            </h1>
          </Link>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-top pt-2">
        <small>
          © {new Date().getFullYear()} Foodipy. All contents of this site belong to Foodipy.
        </small>
      </footer>
    </div>
  )
}

export default Layout
