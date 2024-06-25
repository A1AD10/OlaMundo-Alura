import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>} />
          <Route path="sobremim" element={<SobreMim/>} />
        </Route>

        {/* 
          na rota (index) que é o mesmo que (path="/"), a estrutura a ser renderizada é:
          <PaginaPadrao>
            <Inicio/>
          </PaginaPadrao>

          na rota ("sobremim") que é o mesmo que ("/sobremim"), a estrutura a ser renderizada é:
          <PaginaPadrao>
            <SobreMim/>
          </PaginaPadrao>
        */}

        <Route path="posts/:id/*" element={<Post/>}/>
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
