"use strict";(self.webpackChunkgatsby_starter_wordpress_blog=self.webpackChunkgatsby_starter_wordpress_blog||[]).push([[701],{8771:function(e,t,a){var l=a(7294),r=a(1883);t.Z=()=>{var e;const{author:t}=(0,r.useStaticQuery)("104267996"),a=null==t||null===(e=t.avatar)||void 0===e?void 0:e.url;return l.createElement("div",{className:"bio"},a&&l.createElement("img",{alt:(null==t?void 0:t.firstName)||"",className:"bio-avatar",src:a}),(null==t?void 0:t.firstName)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,t.firstName)," ",(null==t?void 0:t.description)||null," ",(null==t?void 0:t.twitter)&&l.createElement("a",{href:"https://twitter.com/"+((null==t?void 0:t.twitter)||"")},"You should follow them on Twitter")))}},9644:function(e,t,a){a.r(t);var l=a(7294),r=a(1883),n=a(5935),o=a(3723),i=a(8771),s=a(8678),c=a(8183);t.default=e=>{let{data:t,pageContext:{nextPagePath:a,previousPagePath:m}}=e;const d=t.allWpPost.nodes;return d.length?l.createElement(s.Z,{isHomePage:!0},l.createElement(c.Z,{title:"All posts"}),l.createElement("div",{className:"row py-3"},d.map((e=>{var t,a,i,s,c,m;const d=e.title,u={data:null===(t=e.featuredImage)||void 0===t||null===(a=t.node)||void 0===a||null===(i=a.localFile)||void 0===i||null===(s=i.childImageSharp)||void 0===s?void 0:s.gatsbyImageData,alt:(null===(c=e.featuredImage)||void 0===c||null===(m=c.node)||void 0===m?void 0:m.alt)||""};return l.createElement("div",{className:"col-md-4"},l.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("div",{className:"card border-0",key:e.uri},(null==u?void 0:u.data)&&l.createElement(o.G,{image:u.data,alt:u.alt,style:{marginBottom:10},className:"card-img-top"}),l.createElement("div",{className:"card-body"},l.createElement("h5",{className:"card-title"},l.createElement(r.Link,{to:e.uri,itemProp:"url"},l.createElement("span",{itemProp:"headline"},(0,n.ZP)(d)))),l.createElement("p",{className:"card-text border-bottom pb-2"},l.createElement("section",{itemProp:"description"},(0,n.ZP)(e.excerpt)),l.createElement("small",null,e.date)),l.createElement(r.Link,{className:"btn btn-primary black-button ",to:e.uri,itemProp:"url"},"Go to The Recipe")))))}))),m&&l.createElement(l.Fragment,null,l.createElement(r.Link,{to:m},"Previous page"),l.createElement("br",null)),a&&l.createElement(r.Link,{to:a},"Next page")):l.createElement(s.Z,{isHomePage:!0},l.createElement(c.Z,{title:"All posts"}),l.createElement(i.Z,null),l.createElement("p",null,"No blog posts found. Add posts to your WordPress site and they'll appear here!"))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-archive-js-416225d830833c9b8363.js.map