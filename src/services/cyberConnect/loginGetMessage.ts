import { gql, graphQLClient } from "./shared";

export default async function (address: string) {
  const mutation = gql`
    mutation LoginGetMessage($input: LoginGetMessageInput!) {
      loginGetMessage(input: $input) {
        message
      }
    }
  `;

  const variables = {
    input: {
      address,
      domain: "cyberconnect.me",
    },
  };

  try {
    const data: any = await graphQLClient.request(mutation, variables);
    return data.loginGetMessage.message;
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
}
