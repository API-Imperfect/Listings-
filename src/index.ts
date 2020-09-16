import "dotenv/config";
import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { connectionOptions } from "../ormconfig";

(async () => {
    const app: Application = express();
    const PORT = process.env.PORT || 4000;

    await createConnection(connectionOptions);

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [__dirname + "/api/**/*.resolvers.*"],
        }), context: ({ res, req }) => ({ req, res }),
    });

    app.use(cors({
        credentials: true, origin: "http://localhost:3000",
    }));

    apolloServer.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:PORT${apolloServer.graphqlPath}/api/listing`);
    });
})();
