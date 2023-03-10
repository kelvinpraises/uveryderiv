import { gql, graphQLClient } from "./shared";

export default async function (address: string) {
  const query = gql`
    query getProfileByAddress($address: AddressEVM!) {
      address(address: $address) {
        wallet {
          profiles {
            edges {
              node {
                profileID
                handle
                avatar
                isPrimary
                metadataInfo {
                  avatar
                  displayName
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    address,
  };

  try {
    const data: any = await graphQLClient.request(query, variables);
    console.log(JSON.stringify(data, undefined, 2));
    return data.address.wallet.profiles.edges as {
      node: {
        profileID: number;
        handle: string;
        avatar: string;
        isPrimary: boolean;
        metadataInfo: {
          avatar: string;
          displayName: string;
        };
      };
    }[];
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
}
