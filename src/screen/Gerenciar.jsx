import { Link } from "react-router-dom";
import useHook from "../hook/useHook";

export default function Gerenciar(options) {
  const {data,delData} = useHook()

  function sendData(params) {
    const res= data[params].filas[4]

    const prioridade={
      1:"#1e88e5",
      2:"#43a047",
      3:"#fdd835",
      4:"#e53935"
    }

    
    return(
      <details>
        <summary>Fila 0{++params}</summary>
        <table>
        { res.map(data =>{
          return(
            <tr key={data.id}>
              <td><div style={{borderColor:prioridade[data.priority]}}>{data.priority}</div></td>
              <td>{data.name}</td>
              <td><button className="outline contrast" onClick={()=>delData(data.id)}>Apagar</button></td>
            </tr>
          )
        })}
        </table>
      </details>
    )  
  }

  return(
    <div>
      <h2>Gerenciamento</h2>
      {data == null ? 
        <article aria-busy="true"></article> 
        : data.map((res,index)=>sendData(index))
      }
      <Link to={'/'}>Voltar ao inicio</Link>
    </div>
  )
}