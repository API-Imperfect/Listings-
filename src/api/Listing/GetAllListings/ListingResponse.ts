import { Field, Int, ObjectType } from "type-graphql";
import { Listing } from "../../../models/Listing";

@ObjectType({ description: "Listing Response Object" })
export class ListingResponse {
    @Field() success: boolean;
    @Field(() => Int) count?: number;

    @Field(() => [Listing]) listings?: Listing[];

    @Field(() => String, { nullable: true })
    error?: string | null;
}
