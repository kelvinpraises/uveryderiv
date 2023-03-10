import { gql, graphQLClient } from "./shared";

export default async function (id: string) {
  const query = gql`
    query getPostByPostId($id: String!) {
      content(id: $id) {
        contentID
        ... on Post {
          commentCount
          comments {
            edges {
              node {
                contentID
              }
            }
          }
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
        contentID: string;
        commentCount: number;
        comments: {
          edges: {
            node: {
              contentID: string;
            };
          }[];
        };
      };
    };
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
}
