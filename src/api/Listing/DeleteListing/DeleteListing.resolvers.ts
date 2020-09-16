import { Arg, Mutation, Resolver } from "type-graphql";
import { Listing } from "../../../models/Listing";
import { DeleteListingResponse } from "./DeleteListingResponse";

@Resolver()
export class DeleteListingResolvers {
    @Mutation(() => DeleteListingResponse)
    async DeleteListing(@Arg("id") id: string): Promise<DeleteListingResponse> {
        try {
            const listing = await Listing.findOne({ id });
            if (!listing) {
                return {
                    success: false,
                    error: "No listing found!",
                };
            }
            await listing.remove();
            return {
                success: true,
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
            };
        }
    }
}
