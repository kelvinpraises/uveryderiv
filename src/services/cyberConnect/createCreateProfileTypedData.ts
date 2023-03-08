import { gql, graphQLClient, useStore } from "./shared";

export default async function ({
  to,
  operator,
  metadata,
  handle,
  avatar,
}: {
  to: string;
  operator: string;
  metadata: string;
  handle: string;
  avatar: string;
}) {
  const mutation = gql`
    mutation CreateCreateProfileTypedData(
      $input: CreateCreateProfileTypedDataInput!
    ) {
      createCreateProfileTypedData(input: $input) {
        typedDataID
      }
    }
  `;

  const variables = {
    input: {
      to,
      operator,
      metadata,
      handle,
      avatar,
    },
  };

  const accessToken = useStore.getState().accessToken;
  console.log(accessToken);
  const requestHeaders = {
    Authorization: `bearer ${accessToken}`,
  };

  try {
    const data: any = await graphQLClient.request(
      mutation,
      variables,
      requestHeaders
    );
    console.log(JSON.stringify(data, undefined, 2));
    return data.createCreateProfileTypedData.typedDataID;
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
}
