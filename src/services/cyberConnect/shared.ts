import { useStore } from "@/store/useStore";
import { gql, GraphQLClient } from "graphql-request";

const endpoint = "https://api.cyberconnect.dev";
const graphQLClient = new GraphQLClient(endpoint);

export { useStore, gql, graphQLClient };
