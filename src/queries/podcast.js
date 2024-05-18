const AllPodcasts = `
query AllPodcasts {
    podcasts {
        description
        id
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
        slug
        title
      }
  }
  
`

const SinglePodcast = `
query SinglePodcast($slug: String!){
    podcast(where: {slug: $slug}) {
        coverImage {
          url
        }
        podcast {
          id
          url
        }
        title
        slug
        description
        epDescription
        createdAt
        duration
      }
  }
  
`

export {AllPodcasts, SinglePodcast}