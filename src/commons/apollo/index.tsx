import { useRecoilState } from "recoil";
import { accessTokenState } from "../store";
import { createUploadLink } from "apollo-upload-client";
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client'


export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}