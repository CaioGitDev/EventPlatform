import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-eu-west-2.graphcms.com/v2/cl4pu8cn52a6a01xnglbs6w49/master',
  cache: new InMemoryCache()
});