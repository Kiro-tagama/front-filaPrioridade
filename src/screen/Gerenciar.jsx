import { Link } from "react-router-dom";
import useHook from "../hook/useHook";
import { Gear, Trash } from "@phosphor-icons/react";

export default function Gerenciar(options) {
  const {data,delData,Animation,notiAudio} = useHook()

  function sendData(params) {
    const res= data[params].filas[4]
    const info= data[params].index

    const prioridade={
      1:"#1e88e5",
      2:"#43a047",
      3:"#fdd835",
      4:"#e53935"
    }

    return(
      <details key={params}>
        <summary>
          Fila 0{++params}
          <small>quantidade:  {info}</small>
        </summary>
        <table>
          <thead>
            <tr>
              <th>Prioridade</th>
              <th>nome</th>
              <th>posição</th>
              <th>Apagar</th>
            </tr>
          </thead>
          <tbody>
          { res.map((data, index) =>{
            return(
              <tr key={data.id}>
                <td><div 
                  style={{
                    borderColor:prioridade[data.priority],
                    color:prioridade[data.priority],
                }}>{data.priority}</div></td>
                <td>{data.name}</td>
                <td>0{++index}</td>
                <td><button className="outline contrast" onClick={()=>delData(data.id)}><Trash size={32/1.5} /></button></td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </details>
    )  
  }

  return(
    <div>
      <h2>
        <Gear size={32}>
          <Animation type="rotate"/>
        </Gear>
        Gerenciamento
      </h2>
      {data == null ? 
        <article aria-busy="true" style={{
          background: 'none',
          boxShadow: 'none'}}></article> 
        : data.map((res,index)=>sendData(index))
      }
      <Link to={'/'}>Voltar ao inicio</Link>
    </div>
  )
}