import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const storeFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@favourites", jsonValue);
        } catch (e) {
            console.log("error storing", e);
        }
    };

    const getFavourites = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favourites')
            return jsonValue != null ? setFavourites(JSON.parse(value)) : null;
        } catch (e) {
            // error reading value
        }
    }

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const remove = (restaurant) => {
        const newFavourites = favourites.filter(
            (x) => x.placeId !== restaurant.placeId
        );

        setFavourites(newFavourites);
    };

    // //loads favourites
    useEffect(() => { getFavourites(favourites); }, [favourites]);

    //saves favourites
    useEffect(() => { storeFavourites(favourites); }, [favourites]);

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    );
};