import react from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => (

    <CompactRestaurantInfo isMapped restaurant={restaurant} />
);