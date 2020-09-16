import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "Delete Listing response object" })
export class DeleteListingResponse {
    @Field() success: boolean;

    @Field(() => String, { nullable: true })
    error?: string | null;
}
