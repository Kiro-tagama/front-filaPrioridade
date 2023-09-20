import { Link } from "react-router-dom";
import useHook from "../hook/useHook";

import { FirstAidKit, List, PlusSquare } from "@phosphor-icons/react";

export default function Init (){
  const {Animation} = useHook()

  return(
    <div>
      <FirstAidKit size={32*3.5} >
        <Animation/>
      </FirstAidKit>
      <h1 style={{marginBottom:20*2}}>Bem-vindo <br />Triagem Hospitalar</h1>
      <p style={{maxWidth:500}}>Aqui, a organização da fila de triagem é simples e eficiente. Veja a lista de pacientes e adicione novos em um instante. Facilitando o processo de cuidados de saúde. Triagem Hospitalar - Agilidade na Organização.</p>
      <div className='bts'>
        <Link to={'/gerenciar'} role="button">
          <List size={32} />
          Gerenciar
        </Link>
        <Link to={'/add'} role="button">
          <PlusSquare size={32} />
          Adicionar
        </Link>
      </div>
      <br />
      <div className="bts">
        <Link to={'/fila/1'} role="button" className="outline">
          Fila 01
        </Link>
        <Link to={'/fila/2'} role="button" className="outline">
          Fila 02
        </Link>
      </div>
    </div>
  )
}