import { gql, graphQLClient } from "./shared";

export default async function (handle: string) {
  const query = gql`
    query getProfileByHandle($handle: String!) {
      profileByHandle(handle: $handle) {
        profileID
        metadataInfo {
          avatar
          bio
          coverImage
          displayName
        }
        owner {
          address
        }
        isPrimary
      }
    }
  `;

  const variables = {
    handle,
  };

  try {
    const data: any = await graphQLClient.request(query, variables);
    console.log(JSON.stringify(data, undefined, 2));
    return data.profileByHandle;
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
}
