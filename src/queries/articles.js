  const AllArticles = `
  query AllArticles {
    articles {
      id
      coverImage {
        url
      }
      createdAt
      description
      id
      readingTime
      updatedAt
      title
      slug
      author {
        ... on Author {
          id
          name
          image {
            id
          }
        }
      }
      content {
        text
      }
    }
  }
`

const SingleArticle = `
  query SingleArticle($slug: String!) {
    article(where: { slug: $slug }) {
      coverImage {
        url
      }
        author {
            ... on Author {
              id
              name
              image {
                id
              }
            }
          }
          content {
            text
            raw
          }
          createdAt
          description
          id
          readingTime
          slug
          title
          updatedAt

    }
}
`
export {AllArticles, SingleArticle}
  