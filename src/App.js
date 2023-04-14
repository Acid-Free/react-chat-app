import Register from "./frontend/pages/Register";
import Login from "./frontend/pages/Login";
import Home from "./frontend/pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style.scss";
import { useContext } from "react";
import { AuthContext } from "./backend/context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  // Prevents unauthorized routing to index
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
