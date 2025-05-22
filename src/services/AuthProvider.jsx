import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import i18n from 'i18next';

const BASE_URL = 'https://data.argaam.com';

// eslint-disable-next-line react-refresh/only-export-components
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': i18n.language,
  },
});

// Update language on every request
axiosInstance.interceptors.request.use(config => {
  config.headers['Accept-Language'] = i18n.language;
  return config;
});

const AuthContext = createContext();

// Custom hook to use the AuthContext
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
//authProvider component whuch will be used to provide the authentication context to the application
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  // Check if token is valid (not expired)
  const isTokenValid = () => {
    const token = sessionStorage.getItem('token');
    const expires = sessionStorage.getItem('expires');
    if (!token || !expires) return false;
    return new Date().getTime() < parseInt(expires, 10);// transform the expires to a number
  };
  // Authenticate and get a new token
  // This function will be called when the token is not valid or expired
const authenticate = async () => {
  try {
    const response = await axiosInstance.post('/authenticate', {
      username: import.meta.env.VITE_API_USERNAME,
      password: import.meta.env.VITE_API_PASSWORD,
    });

    if (!response.data || !response.data.jwtToken || !response.data.expires) {
      throw new Error('Invalid response from authentication API');
    }

    sessionStorage.setItem('token', response.data.jwtToken);
    sessionStorage.setItem('expires', response.data.expires.toString());
    setToken(response.data.jwtToken);

  } catch (error) {
    console.error('Authentication failed:', error);
    sessionStorage.clear();
    setToken(null);
  }
};

  // useRef to prevent multiple calls to the authentication function
// const didRunRef = useRef(false);

useEffect(() => {
  const init = async (current) => {
    if (current) return;
    current = true;

    if (isTokenValid()) {
      setToken(sessionStorage.getItem('token'));
    } else {
      await authenticate();
    }

    setIsAuthReady(true);
  };

  init();
}, []);


  // Attach token to all axiosInstance requests
  useLayoutEffect(() => {
    const interceptor = axiosInstance.interceptors.request.use(config => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => axiosInstance.interceptors.request.eject(interceptor);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, isAuthReady }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;