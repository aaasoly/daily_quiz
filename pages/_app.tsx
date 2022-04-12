import "antd/dist/antd.css";
// import '../styles/globals.css'
import { globalStyles } from '../src/commons/styles/globalStyles'
import Layout from "../src/commons/layout"
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/commons/apollo";

function MyApp({ Component, pageProps }) {

  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </ApolloSetting>
    </RecoilRoot>
  )
}

export default MyApp
