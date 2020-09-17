import React, { FunctionComponent } from "react";
import { server } from "../../lib/api/server";
import { ListingsData } from "./types";

const LISTINGS = `
query {
    Listings {
      success
      count
      listings {
        id
        title
        address
        price
        image
        numOfGuests
        numOfBaths
        numOfBeds
        rating
      }
    }
  }
  
`;



interface Props {
    title: string;
}

export const Listings: FunctionComponent<Props> = ({ title }) => {
    const fetchListings = async () => {
        const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
        console.log(data);
    };
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={fetchListings}>Query Listings!</button>
        </div>
    );
};
