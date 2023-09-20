import '@picocss/pico';

import { BrowserRouter,Routes, Route } from "react-router-dom";

import Init from './screen/Init';
import Gerenciar from './screen/Gerenciar';
import Adicionar from './screen/Adicionar';
import Fila from './screen/Fila';

export default function App (){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="/" element={<Init/>} />
        <Route path="/gerenciar" element={<Gerenciar/>} />
        <Route path="/add" element={<Adicionar/>} />
        <Route path="/fila/:id" element={<Fila/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}