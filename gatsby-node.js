const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Importing Templates
  const subProcedureTemplate = path.resolve("./src/templates/subProcedure.jsx")

  const {
    data: { subProcedures },
  } = await graphql(`
    query {
      subProcedures: allContentfulSubProcedure {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  subProcedures.edges.forEach(edge => {
    createPage({
      component: subProcedureTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
