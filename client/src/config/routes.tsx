import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Class } from "../pages/Class/Class";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class" element={<Class />} />
        </Routes>
    </BrowserRouter>
  )
}
