import { ConnectionOptions } from "typeorm";

export const connectionOptions: ConnectionOptions = {
    type: "postgres",
    database: "listings",
    synchronize: true,
    logging: false,
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: ["src/models/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
        entitiesDir: "src/models",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber"
    },

};


