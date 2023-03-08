import { gql, graphQLClient } from "./shared";

export default async function ({
  address,
  signature,
}: {
  address: string;
  signature: string;
}) {
  const mutation = gql`
    mutation LoginVerify($input: LoginVerifyInput!) {
      loginVerify(input: $input) {
        accessToken
        refreshToken
      }
    }
  `;

  const variables = {
    input: {
      address,
      domain: "cyberconnect.me",
      signature,
    },
  };

  try {
    const data: any = await graphQLClient.request(mutation, variables);
    return data.loginVerify.accessToken;
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
}
