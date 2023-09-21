import { useEffect } from "react";
import useHook from "../hook/useHook";
import { useParams } from "react-router-dom";

import ding from "../hook/ding.mp3"

export default function Fila() {
  const {data,delData} = useHook()
  const {id} = useParams()
  
  const index = [1,2]
  const user = data && data[id-1].filas[4][0] ? data[id-1].filas[4] : null
  
  // function song(){
  //   const audio = new Audio(ding)
  //   audio.play().then((res)=>console.log(res))
  //   .catch((err)=>console.log(err))
  //   setTimeout(()=>{audio.pause()},1000) 
  // }
  // useEffect(()=>{
  //   song()
  // },[delData])

  return(
    <div>
      <p>FILA {id}</p>
      {user == null?
      <article aria-busy="true" style={{
        background: 'none',
        boxShadow: 'none'}}/>
      :
      <>
      <article>
        <header><h3 style={{marginBottom:0}}>Agora</h3></header>
        <h1>{user[0].name}</h1>
        <i>{user[0].id}</i>
      </article>
      <table>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>ID</th>
        </tr>
        {index.map(i=>(
          user[i]?
          <tr>
            <td>{i == 1 ? "Proximo": "Em seguida"}</td>
            <td>{user[i].name}</td>
            <td>{user[i].id}</td>
          </tr>
          :null
          ))}
      </table> 
      </>}
    </div>
  )
}