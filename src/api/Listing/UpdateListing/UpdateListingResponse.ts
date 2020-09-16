import { Field, ObjectType } from "type-graphql";
import { Listing } from "../../../models/Listing";

@ObjectType({ description: "Log In response object" })
export class UpdateListingResponse {
    @Field() success: boolean;

    @Field(() => String, { nullable: true })
    error?: string | null;

    @Field(() => Listing, { nullable: true })
    listing?: Listing
}
