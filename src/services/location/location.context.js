import React, { useEffect, useState, createContext } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {

    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState("san francisco");

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword.toLowerCase());
        locationRequest(searchKeyword).then(locationTransform).then(result => {
            setIsLoading(false);
            setLocation(result);
        }).catch(error => {
            setIsLoading(false);
            setError(error);
        });
    }

    useEffect(() => { onSearch(keyword) }, []);

    return <LocationContext.LocationContextProvider value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
    }}>
        {children}
    </LocationContext.LocationContextProvider>
};
