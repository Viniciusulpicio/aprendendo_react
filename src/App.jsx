import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Perfil from "./pages/Perfil";
import Game from "./pages/Game";
import Badges from "./pages/Badges";

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/perfil" element={<Perfil />}/>
          <Route path="/game" element={<Game />}/>
          <Route path="/badge" element={<Badges />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/contato" element={<Contato />}/>

        </Routes>
      </BrowserRouter>      
      
    </div>
  )
}
export default App