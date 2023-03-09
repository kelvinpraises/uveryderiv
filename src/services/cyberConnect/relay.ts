import { gql, graphQLClient, useStore } from "./shared";

export default async function (typedDataID: string, signature?: string) {
  const mutation = gql`
    mutation Relay($input: RelayInput!) {
      relay(input: $input) {
        relayActionId
      }
    }
  `;

  const variables = {
    input: {
      typedDataID,
      signature,
    },
  };

  const accessToken = useStore.getState().accessToken;
  const requestHeaders = {
    "X-API-KEY": "pyOHddcHwjSIa9XVmlgOgiy9wvE6H1ml", // FIXME: should be on server only.
    Authorization: `bearer ${accessToken}`,
  };

  try {
    const data: any = await graphQLClient.request(
      mutation,
      variables,
      requestHeaders
    );
    console.log(JSON.stringify(data, undefined, 2));
    return data.relay.relayActionId;
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
}
