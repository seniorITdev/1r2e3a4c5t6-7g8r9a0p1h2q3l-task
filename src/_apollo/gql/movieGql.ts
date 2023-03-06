import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
    query GetMovies ($term: String!){
        search(term: $term) {
            edges {
                node {
                    ... on Movie {
                        id
                        title
                        poster(size: W342)
                    }
                }
            }
        }
    }
`;