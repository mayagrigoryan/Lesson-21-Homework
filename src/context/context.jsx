import React, { createContext } from "react";

export const MyContext = createContext(null)

export const MyProvider = ({ children, value }) => {
    return (
        <MyContext.Provider value = {value}>
            {children}
        </MyContext.Provider>
    )
}