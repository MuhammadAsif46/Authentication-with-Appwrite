import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import ProfilePage from "./pages/PorfilePage";

function App() {
  const isUser = localStorage.getItem("user");
  
  return (
    <>
      {isUser && (
        <Routes>
          <Route path="/update-password" element={<UpdatePasswordPage />} />
          <Route path="/" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      )}

      {!isUser && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      )}
    </>
  );
}

export default App;
