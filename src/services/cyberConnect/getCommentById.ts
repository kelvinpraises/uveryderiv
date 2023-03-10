import { gql, graphQLClient } from "./shared";

export default async function (id: string) {
  const query = gql`
    query getCommentById($id: String!) {
      content(id: $id) {
        contentID
        ... on Comment {
          title
          body
          authorHandle
          authorAddress
          createdAt
        }
      }
    }
  `;

  const variables = {
    id,
  };

  try {
    const data: any = await graphQLClient.request(query, variables);
    console.log(JSON.stringify(data, undefined, 2));
    return data as {
      content: {
        title: string;
        body: string;
        authorHandle: string;
        authorAddress: string;
        createdAt: string;
      };
    };
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
}
