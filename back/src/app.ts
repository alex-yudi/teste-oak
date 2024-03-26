import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { FetchAgentsByMinKwhResolver } from "./resolvers/fetch-agents-by-min-kwh-resolver";

export async function app(port: number) {
  const schema = await buildSchema({
    resolvers: [FetchAgentsByMinKwhResolver]
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen(port);
  console.log(`Server is running, GraphQL available at ${url}`);
}