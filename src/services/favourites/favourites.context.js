import react, { createContext, useState } from "react";


export const FavouritesContext = createContext();

export const FavouritesContextProvuder = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const remove = (restaurant) => {

        const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId);
        favourites(newFavourites);
    };

    return (
        <FavouritesContext.Provider value={{ favourites, addToFavourites: add, removeFromFavourites: remove, }}>
            {children}
        </FavouritesContext.Provider>
    );
};