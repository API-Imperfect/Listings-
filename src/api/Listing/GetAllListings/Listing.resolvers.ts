import { Query, Resolver } from "type-graphql";
import { Listing } from "../../../models/Listing";
import { ListingResponse } from "./ListingResponse";

@Resolver()
export class ListingResolvers {
    @Query(() => ListingResponse)
    async Listings(): Promise<ListingResponse> {
        try {
            const listings = await Listing.find();
            return {
                success: true,
                count:listings.length,
                listings
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
            };
        }
    }
}
