import { useEffect, useState } from "react";
import "./App.css";
import conf from "./conf/conf";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout(userData));
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return !isLoading ? (
    <>
      <h1>BlogNode with Appwrite</h1>
    </>
  ) : null;
}

export default App;
