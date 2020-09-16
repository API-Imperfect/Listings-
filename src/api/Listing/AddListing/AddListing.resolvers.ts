import { Arg, Mutation, Resolver } from "type-graphql";
import { Listing } from "../../../models/Listing";
import { AddListingInput } from "./AddListingInput";
import { AddListingResponse } from "./AddListingResponse";

@Resolver()
export class AddListingResolvers {
    @Mutation(() => AddListingResponse)
    async AddListing(
        @Arg("data")
        data: AddListingInput
    ): Promise<AddListingResponse> {
        try {
            const newListing = await Listing.create(data).save();
            return {
                success: true,
                listing: newListing,
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
            };
        }
    }
}
