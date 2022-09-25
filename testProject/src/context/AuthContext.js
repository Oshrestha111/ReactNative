import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setIsLoading(true);
    setUserToken("token");
    AsyncStorage.setItem("userToken", "token");
    // JWT Authentication ma  api ley refused to connect to the server
    //https://localhost/wp-jwt-test/wp-json/jwt-auth/v1/token ?username=admin&password=admin <-- yo wala API
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      isLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      isLoading(false);
    } catch (error) {
      console.log(`isLogged in error ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
