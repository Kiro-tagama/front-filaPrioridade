import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../context/ContextProvider";

export default function Fila() {
  const {data,timer,timer2} = useContext(Context)
  const {id} = useParams()
  
  const index = [1,2]
  const user = data && data[id-1].filas[4][0] ? data[id-1].filas[4] : null
  
  
  const t1 = timer <= 0 ? "será atendido em breve" : timer + " min"
  const t2 = timer2 <= 0 ? "será atendido em breve" : timer2 + " min"
  
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
        <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <td>Espera</td>
          <th>ID</th>
        </tr>
        </thead>
        <tbody>
        {index.map(i=>(
          user[i]?
          <tr key={i}>
            <td>{i == 1 ? "Proximo": "Em seguida"}</td>
            <td>{user[i].name}</td>
            <td>{i==1? t1:t2}</td>
            <td>{user[i].id.slice(0,8)}</td>
          </tr>
          :null
          ))}
        </tbody>
      </table> 
      </>}
      <Link to={'/'}>Voltar ao inicio</Link>
    </div>
  )
}