import { gql } from '@apollo/client';

export const GET_DETAIL = gql`
    query GetDetail($id: ID!) {
        node(id: $id) {
            ... on Movie {
                id
                title
                overview
                runtime
                backdrop(size: W780)
            }
        }
    }
`;