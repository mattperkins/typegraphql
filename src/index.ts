import "reflect-metadata"
import { ApolloServer } from "apollo-server-express"
import * as Express from "express"
import { buildSchema, Resolver, Query } from "type-graphql"

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return "hello,world"
  }
}

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver]
  })

  const apolloServer = new ApolloServer({ schema })

  const app = Express()

  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => {
    console.log('Server running...4000/graphql')
  })
}

main()