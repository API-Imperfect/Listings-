import { Field, ObjectType } from "type-graphql";
import { Listing } from "../../../models/Listing";

@ObjectType({ description: "Log In response object" })
export class AddListingResponse {
    @Field() success: boolean;
    @Field(() => Listing) listing?: Listing;

    @Field(() => String, { nullable: true })
    error?: string | null;
}
