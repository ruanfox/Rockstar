import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaginaBase } from "./Pages/PaginaBase/Index";
import { Home } from "./Pages/Home";
import { Jogos } from "./Pages/Jogos";
import { Loja } from "./Pages/Loja";
import { Ajuda } from "./Pages/Ajuda";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/jogos" element={<Jogos />}></Route>
                    <Route path="/loja" element={<Loja />}></Route>
                    <Route path="/ajuda" element={<Ajuda />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}