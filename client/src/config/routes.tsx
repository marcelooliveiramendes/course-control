import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Class } from "../pages/Class/Class";
import { Contents } from "../pages/Contents/Contents";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class" element={<Class />} />
            <Route path="/content" element={<Contents />} />
        </Routes>
    </BrowserRouter>
  )
}
