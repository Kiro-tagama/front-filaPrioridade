import { Link } from "react-router-dom";
import useHook from "../hook/useHook";

export default function Adicionar() {
  const {addData,setAddData,postData}= useHook()

  const list = [1,2,3,4];

  return(
    <div>
      <h2>Adicionar</h2>

      <label htmlFor="">Name</label>
      <input 
        type="text" 
        placeholder="Jhon Doe" 
        value={addData.name}
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
            id={data} 
            value={data}
            defaultChecked={data==1?true:false}
            onChange={
              i=>setAddData({...addData,priority:parseInt(i.target.value)})
            }
          />
          {data}
        </label>
      ))}
      <br />
      <button type="submit" onClick={postData}>Adicionar</button>
      <Link to={'/'}>Voltar ao inicio</Link>
    </div>
  )
}