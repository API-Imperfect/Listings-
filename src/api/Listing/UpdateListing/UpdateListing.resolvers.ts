import { Arg, Mutation, Resolver } from "type-graphql";
import { Listing } from "../../../models/Listing";
import { UpdateListingInput } from "./UpdateListingInput";
import { UpdateListingResponse } from "./UpdateListingResponse";

@Resolver()
export class UpdateListingResolvers {
    @Mutation(() => UpdateListingResponse)
    async UpdateListing(
        @Arg("id") id: string,
        @Arg("data") data: UpdateListingInput
    ): Promise<UpdateListingResponse> {
        try {
            const listing = await Listing.findOne({ id });
            if (!listing) {
                return {
                    success: false,
                    error: "No listing found",
                };
            }
            Object.assign(listing, data);
            await listing.save();
            return {
                success: true,
                listing,
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
            };
        }
    }
}
