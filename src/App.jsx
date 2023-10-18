import '@picocss/pico';

import { BrowserRouter,Routes, Route } from "react-router-dom";

import Init from './screen/Init';
import Gerenciar from './screen/Gerenciar';
import Adicionar from './screen/Adicionar';
import Fila from './screen/Fila';
import Editar from './screen/Editar';

import { ContextProvider } from './context/ContextProvider';

export default function App (){
  return(
    <BrowserRouter>
    <ContextProvider>
    <Routes>
      <Route path="/">
        <Route path="/" element={<Init/>} />
        <Route path="/gerenciar" element={<Gerenciar/>} />
        <Route path="/add" element={<Adicionar/>} />
        <Route path="/fila/:id" element={<Fila/>} />
        <Route path="/edit" element={<Editar/>} />
      </Route>
    </Routes>
    </ContextProvider>
    </BrowserRouter>
  )
}