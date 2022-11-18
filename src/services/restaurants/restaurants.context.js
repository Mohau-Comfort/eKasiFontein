import React, { useState, createContext, useEffect, useMemo, Children } from "react";

import { restaurantsRequest, restaurantTransform } from "./restaurants.services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {

    return (
        <RestaurantsContextProvider>{children}</RestaurantsContextProvider>
    )
}