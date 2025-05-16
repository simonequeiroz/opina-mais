import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from '../pages/Dashboard';


function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Outras rotas como /cadastro, /dashboard virão depois */}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
