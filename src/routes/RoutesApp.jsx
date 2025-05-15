import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Outras rotas como /cadastro, /dashboard virão depois */}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
