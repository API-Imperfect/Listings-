import { MinLength } from "class-validator";
import { Field, Float, InputType, Int } from "type-graphql";

@InputType()
export class AddListingInput {
    @Field() @MinLength(6) title: string;
    @Field() image: string;
    @Field() address: string;
    @Field(() => Float) price: number;
    @Field(() => Int) numOfGuests: number;
    @Field(() => Int) numOfBeds: number;
    @Field(() => Int) numOfBaths: number;
    @Field(() => Int) rating: number;
}
