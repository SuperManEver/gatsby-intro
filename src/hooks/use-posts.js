import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query AllPosts {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "#ddbbff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)

  const nodes = data?.allMdx?.nodes

  return nodes.map(
    ({ frontmatter: { title, slug, author, image }, excerpt }) => ({
      title,
      author,
      slug,
      excerpt,
      image,
    })
  )
}

export default usePosts
