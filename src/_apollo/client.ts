import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://tmdb.beclose.net/',
    cache: new InMemoryCache(),
});