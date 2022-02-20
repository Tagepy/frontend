import "./App.css";

import { useState } from "react";
import MainContext from "./Context/MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from "./Components/Toolbar";
import CreatePostPage from "./Pages/CreatePostPage";
import SingleProductPage from "./Pages/SingleProductPage";
import MainPage from "./Pages/MainPage";
import CartPage from "./Pages/CartPage";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  const [getUsers, setUsers] = useState([]);
  const [getCurrentUser, setCurrentUser] = useState(null);
  const [getCurrentPage, setCurrentPage] = useState("");
  const [allProducts, setProducts] = useState([]);
  const [getCart, setCart] = useState([]);

  return (
    <MainContext.Provider
      value={{
        getUsers,
        setUsers,
        getCart,
        setCart,
        setCurrentUser,
        getCurrentUser,
      }}
    >
      <BrowserRouter>
        <Toolbar
          user={getCurrentUser}
          page={getCurrentPage}
          getCart={getCart}
        />
        <Routes>
          <Route
            path="/register"
            element={<RegistrationPage setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="/login"
            element={<LoginPage setCurrentPage={setCurrentPage} />}
          />

          <Route
            path="/"
            element={
              <MainPage
                allProducts={allProducts}
                setProducts={setProducts}
                setCurrentPage={setCurrentPage}
              />
            }
          />
          <Route
            path="/create"
            element={<CreatePostPage setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="/product/:id"
            element={
              <SingleProductPage
                getCart={getCart}
                setCart={setCart}
                setCurrentPage={setCurrentPage}
              />
            }
          />
          <Route
            path="/cart"
            element={<CartPage setCurrentPage={setCurrentPage} />}
          />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
