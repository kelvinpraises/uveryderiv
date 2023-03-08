import { gql, graphQLClient } from "./shared";

export default async function (relayActionId: string) {
  const query = gql`
    query RelayActionStatus($relayActionId: ID!) {
      relayActionStatus(relayActionId: $relayActionId) {
        ... on RelayActionStatusResult {
          txHash
          txStatus
        }
        ... on RelayActionError {
          lastKnownTxHash
          reason
        }
        ... on RelayActionQueued {
          queuedAt
          reason
        }
      }
    }
  `;

  const variables = {
    relayActionId,
  };

  try {
    const data: any = await graphQLClient.request(query, variables);
    console.log(JSON.stringify(data, undefined, 2));
    return data.relayActionStatus;
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
}
