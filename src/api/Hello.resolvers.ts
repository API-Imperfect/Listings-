import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolvers {
    @Query(() => String)
    async Hello() {
        return "Hello Alpha";
    }
}
