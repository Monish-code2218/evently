import React, { createContext, useContext, useState } from 'react';


// Create a context for authentication
const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);
export const AuthProvider = () => {
    const [ user, setUser ] = useState({name: "", isAuthenticated: false})

    const login = (userName, password) => {

         // Make a call to the authentication API to check the username
         
         return new Promise((resolve, reject) => {

              if (password === "password") {
                   setUser({name: userName, isAuthenticated: true})
                   resolve("success")
              } else {
                   reject("Incorrect password")
              }
         })
         
         
    }
    const logout = () => {

        setUser({...user, isAuthenticated: false})
   }


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);