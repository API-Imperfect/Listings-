import { MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateListingInput {
    @Field({ nullable: true }) @MinLength(1) title: string;
    @Field({ nullable: true }) image: string;
    @Field({ nullable: true }) address: string;
    @Field({ nullable: true }) price: number;
    @Field({ nullable: true }) numOfGuests: number;
    @Field({ nullable: true }) numOfBeds: number;
}
