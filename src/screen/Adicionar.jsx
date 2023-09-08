import { Link } from "react-router-dom";
import useHook from "../hook/useHook";

import { PlusSquare } from "@phosphor-icons/react";

export default function Adicionar() {
  const {addData,setAddData,postData,Animation}= useHook()

  const list = [1,2,3,4];

  return(
    <div>
      <h2>
        <PlusSquare size={32}>
          <Animation type="rotate"/>
        </PlusSquare>
        Adicionar
      </h2>

      <div style={{textAlign:'start'}}>
      <label htmlFor="">Name</label>
      <input 
        type="text" 
        placeholder="Jhon Doe" 
        value={addData.name}
        aria-invalid={addData.name.length <=3 ? "true" : "false"}
        onChange={
          txt=>setAddData({...addData,name:txt.target.value})
        } 
        />
      
      <label>Prioridade</label>
      {list.map(data=>(
        <label for={data}>
          <input 
            type="radio" 
            name="prioridade" 
            className="inputRadio"
            id={data} 
            value={data}
            defaultChecked={data==1?true:false}
            onChange={
              i=>setAddData({...addData,priority:parseInt(i.target.value)})
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
      </div>
      <br />
      <button type="submit" onClick={postData}>
        <PlusSquare size={32}/>
        Adicionar
      </button>
      <Link to={'/'}>Voltar ao inicio</Link>
    </div>
  )
}