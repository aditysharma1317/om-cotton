// Updated src/api/hashnode.js
import { GraphQLClient, gql } from 'graphql-request';

export const client = new GraphQLClient('https://gql.hashnode.com/');

// Fixed query - notice the structure matches the working debug query
export const GET_POSTS = gql`
  query GetPosts($first: Int!) {
    publication(host: "omcottonstest.hashnode.dev") {
      posts(first: $first) {
        totalDocuments
        edges {
          node {
            id
            slug
            title
            brief
            coverImage {
              url
            }
            publishedAt
            author {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetPost($slug: String!) {
    publication(host: "omcottonstest.hashnode.dev") {
      post(slug: $slug) {
        id
        title
        brief
        content {
          html
        }
        coverImage {
          url
        }
        publishedAt
        author {
          name
        }
      }
    }
  }
`;