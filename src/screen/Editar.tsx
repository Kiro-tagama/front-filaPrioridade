import React, { useContext, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { Context } from "../context/ContextProvider";

export default function Editar() {
  const {putNewDate} = useContext(Context)
  const {state} = useLocation();
  const nav=useNavigate()
  
  const [newData, setNewData] = useState<any>(state);

  console.log(newData);
  
  const list = [1, 2, 3, 4];

  return (
    <div>
      <article style={{ minWidth: "60%" }}>
        <h2>Editar usuario</h2>
        <label style={{ textAlign: 'left' }}>ID</label>
        <input
          type="text"
          value={newData.id}
          readOnly />
        <label style={{ textAlign: 'left' }}>Nome</label>
        <input
          type="text"
          placeholder="Jhon Doe"
          value={newData.name}
          aria-invalid={newData.name.length <= 2 ? "true" : "false"}
          onChange={
            txt => setNewData({ ...newData, name: txt.target.value })} />
        <label style={{ textAlign: 'left' }}>Prioridade</label>
        {list.map(data=>(
        <label style={{textAlign:"left"}}>
          <input 
            type="radio" 
            name="prioridade" 
            className="inputRadio"
            id={data.toString()} 
            value={data}
            defaultChecked={data==newData.priority?true:false}
            onChange={
              i=>setNewData({...newData,priority:parseInt(i.target.value)})
            }
          />
          {data} {
            (()=>{
              switch (data) {
                case 1: return "baixa"
                case 2: return "média"
                case 3: return "alta"
                default: return "Press F"
              }
            })()
          }
        </label>
      ))}
        <br />
        <div className="bts">
          <button className="outline" onClick={()=>nav(-1)}>Voltar</button>
          <button onClick={()=>{
            putNewDate(newData)
            nav(-1)
          }}>Salvar</button>
        </div>
      </article>
    </div>
  );
}
