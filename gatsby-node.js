const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create a custom templated WordPress page (route : /home) for this example
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
    // EDITED: Destructured for home page redirect
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true });

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPage(filter: {
        title: {
          ne: "Home Page"
        }
      }) {
        edges {
          node {
            id
            slug
            status
            template
            title
            content
          }
        }
      }
      homePage: allWordpressPage(filter: {
        title: {
          eq: "Home Page"
        }
      }) {
        edges {
          node {
            id
            slug
            status
            template
            title
            content
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            template
            format
            title
            content
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, homePage, allWordpressPost } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/${edge.node.slug}`,
      component: slash(pageTemplate),
      context: edge.node,
    })
  })


  // DECLARATION OF A CUSTOM PAGE TEMPLATE
  const homeTemplate = path.resolve(`./src/templates/homePage.js`);

  homePage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: slash(homeTemplate),
      context: edge.node,
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/posts/${edge.node.slug}`,
      component: slash(postTemplate),
      context: edge.node,
    })
  })
}