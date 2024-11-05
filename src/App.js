import { Layout } from "./components/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { MainPage } from "./pages/MainPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { ListsPage } from "./pages/ListsPage";
import { AddCityPage } from "./pages/AddCityPage.jsx";
import { AddListPage } from "./pages/AddListPage.jsx";
import { ListPage } from "./pages/ListPage.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getMe } from "./redux/features/auth/authSlice.js";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="lists"
          element={
            <ProtectedRoute>
              <ListsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="city/add"
          element={
            <ProtectedRoute>
              <AddCityPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="list/add"
          element={
            <ProtectedRoute>
              <AddListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="list/:id"
          element={
            <ProtectedRoute>
              <ListPage />
            </ProtectedRoute>
          }
        />
      </Routes>

      <ToastContainer position="top-right" />
    </Layout>
  );
}

export default App;
