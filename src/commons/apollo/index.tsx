import { useRecoilState } from "recoil";
import { accessTokenState } from "../store";
import { createUploadLink } from "apollo-upload-client";
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client'
import { useEffect } from "react";
import getAccessToken from "../libraries/getAccessToken";
import { onError } from "@apollo/client/link/error";


export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken)
    })
  }, [])

  const errorLink = onError(({graphQLErrors, operation, forward})=>{
    if(graphQLErrors){
      if(errorLink.extensions.code === "UNAUTHENTICATED"){
        getAccessToken().then((newAccessToken) => {
          setAccessToken(newAccessToken)

          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              Authorization: `Bearer ${newAccessToken}`
            }
          })

          return forward(operation)
        })
      }
    }
  })

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credential: "include"
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