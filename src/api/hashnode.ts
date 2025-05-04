import { GraphQLClient, gql } from 'graphql-request';

export const client = new GraphQLClient('https://gql.hashnode.com/');

export const GET_POSTS = gql`
  query GetPosts($first: Int!) {
    publication(host: "omcottons.hashnode.dev") {
      posts(first: $first) {
        edges {
          node {
            title
            brief
            slug
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
    publication(host: "omcottons.hashnode.dev") {
      post(slug: $slug) {
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
