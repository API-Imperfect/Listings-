import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("listings")
export class Listing extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    image: string;

    @Field()
    @Column()
    address: string;

    @Field(() => Float)
    @Column({ type: "double precision" })
    price: number;

    @Field(() => Int)
    @Column({ type: "int" })
    numOfGuests: number;

    @Field(() => Int)
    @Column({ type: "int" })
    numOfBeds: number;

    @Field(() => Int)
    @Column({ type: "int" })
    numOfBaths: number;

    @Field(() => Int)
    @Column({ type: "int" })
    rating: number;
}
