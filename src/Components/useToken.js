import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token') == undefined ?? null;
    const userToken = JSON.parse(tokenString);
    return userToken ?? null;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken ?? null));
    setToken(userToken ?? null);
  };

  return {
    setToken: saveToken,
    token
  }
}