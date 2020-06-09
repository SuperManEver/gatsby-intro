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
          }
          excerpt
        }
      }
    }
  `)

  const nodes = data?.allMdx?.nodes

  return nodes.map(({ frontmatter: { title, slug, author }, excerpt }) => ({
    title,
    author,
    slug,
    excerpt,
  }))
}

export default usePosts
