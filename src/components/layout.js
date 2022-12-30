import React from "react"
import {Helmet} from "react-helmet";
import { Link, useStaticQuery, graphql } from "gatsby"
import Logo from '../../static/img/logo.png'
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
    <div id="wrapper" class="wrapper">

      <header class="header fixed-top">
            <div class="header-main navbar-expand-xl">
                <div class="container-fluid">
                    <div class="header-main">
       
                        <div class="site-branding">
                            <Link to="/">
                              <img src={Logo} alt="Logo" className="fluid-img" style={{width: 110}} />
                            </Link>
                        </div>
                        
                        <div class="main-menu header-navbar">
                            <nav class="navbar">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ">
                                    <li class="nav-item">
                                        <Link className="nav-link" href="/"> Home </Link>
                                    </li>
                                </ul>
                            </div>

                            </nav>
                        </div>


                        <div class="header-action-items">

                            {/* <ul class="header-social list-inline">
                                <li><a href="#" ><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#" ><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#" ><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#" ><i class="fab fa-youtube"></i></a></li>
                            </ul> */}
                                        

                            {/* <div class="theme-switch-wrapper switch-icon">
                                <label class="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <span class="slider round ">
                                    <i class="lar la-sun icon-light"></i>
                                    <i class="lar la-moon icon-dark"></i>
                                </span>
                                </label>
                            </div> */}

                        
                            {/* <div class="search-icon"> <a href="#search">  <i class="fas fa-search"></i></a></div> */}

                 
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>  
                    </div>
                </div> 
            </div>
        </header>


      <main>{children}</main>



      
      <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright">
                            <p>© {new Date().getFullYear()} {parse(title)} All contents of this site belong to {parse(title)}.</p>
                        </div>
                        <div class="back">
                            <a href="#" class="back-top">
                                <i class="fas fa-arrow-up"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      <Helmet>
        <script src="/vendor-js/jquery.min.js"></script>
        <script src="/vendor-js/bootstrap.min.js"></script>
        <script src="/vendor-js/popper.min.js"></script>
        <script src="/vendor-js/swiper.min.js"></script>
        <script src="/vendor-js/masonry.min.js"></script>
        <script src="/vendor-js/main.js"></script> 
      </Helmet>
       
    </div>
  )
}

export default Layout
