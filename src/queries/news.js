const AllBlogs = `
query AllBlogs {
    blogs {
      coverImage {
        url
      }
      title
      slug
      id
    }
  }
  
`

const SingleBlog = `
query SingleBlog($slug: String!){
    blog(where: { slug: $slug }) {
      slug
      title
      id
      updatedAt
      createdAt
      coverImage {
        url
      }
      media {
        url
      }
      content {
        raw
      }
    }
  }
  
`

export {AllBlogs, SingleBlog}