import { gql, graphQLClient, useStore } from "./shared";

export default async function (profileIDs: number[]) {
  const mutation = gql`
    mutation CreateSubscribeTypedData($input: CreateSubscribeTypedDataInput!) {
      createSubscribeTypedData(input: $input) {
        typedData {
          chainID
          data
          id
          nonce
          sender
        }
      }
    }
  `;

  const accessToken = useStore.getState().accessToken;
  const requestHeaders = {
    Authorization: `bearer ${accessToken}`,
  };

  const variables = {
    input: {
      profileIDs,
    },
  };

  try {
    const data: any = await graphQLClient.request(
      mutation,
      variables,
      requestHeaders
    );
    return data.createSubscribeTypedData.typedData;
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
}
