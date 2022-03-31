import "antd/dist/antd.css";
// import '../styles/globals.css'
import { globalStyles } from '../src/commons/styles/globalStyles'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Layout from "../src/commons/layout"
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient ({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
  <ApolloProvider client={client}>
    <Global styles={globalStyles} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
  )
}

export default MyApp
