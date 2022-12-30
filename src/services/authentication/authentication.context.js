import React, { useState, createContext, useRef } from "react";
import { Alert } from "react-native";
import { initializeApp } from 'firebase/app';
import { loginRequest } from "./authentication.service";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateEmail, updatePassword, reauthenticateWithCredential, } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBoZowJJ_sgH0bYodXjaKlQO2R1_YKoExc",
    authDomain: "ekasi-fontein.firebaseapp.com",
    projectId: "ekasi-fontein",
    storageBucket: "ekasi-fontein.appspot.com",
    messagingSenderId: "108431025855",
    appId: "1:108431025855:web:29e7fe6d4f9b7874dc080a"
};

const app = initializeApp(firebaseConfig);

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const auth = useRef(getAuth(app)).current;

    onAuthStateChanged(auth, (usr) => {
        if (usr) {
            setUser(usr);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    });

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(auth, email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if (password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    const onLogout = () => {
        signOut(auth).then(() => {
            setUser(null);
            setError(null);
        });
    };


    // Reauthenticates the current user and returns a promise...
    const reauthenticateUser = (currentPassword) => {
        var currentUser = auth.currentUser;
        return reauthenticateWithCredential(currentUser, currentPassword);
    };


    const changeEmail = (newEmail) => {
        updateEmail(auth.currentUser, newEmail).then((u) => {
            setUser(u);
            setIsLoading(false);
            Alert.alert("Email was changed");
        })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    const changePassword = (newPassword, repeatedPassword) => {
        setIsLoading(true);
        if (newPassword !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }
        updatePassword(auth.currentUser, newPassword).then((u) => {
            setUser(u);
            setIsLoading(false);
            Alert.alert("Password was changed");
        })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
                changeEmail,
                changePassword,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};