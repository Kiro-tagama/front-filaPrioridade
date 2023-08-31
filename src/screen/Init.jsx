import { Link } from "react-router-dom";

export default function Init (){
  return(
    <div>
      <h1>Fila Prioridade</h1>
      <div className='bts'>
        <Link to={'/gerenciar'} role="button">
          Gerenciar
        </Link>
        <Link to={'/add'} role="button">
          Adicionar
        </Link>
      </div>
    </div>
  )
}