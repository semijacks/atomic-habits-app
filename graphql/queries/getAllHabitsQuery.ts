import { gql } from "@apollo/client";

export const GetAllHabitsQuery = gql`
  query getAllHabitsQuery($first: Int, $after: String) {
    habits(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          title
          description
          category
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
