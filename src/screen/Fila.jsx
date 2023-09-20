import { useEffect } from "react";
import useHook from "../hook/useHook";
import { useParams } from "react-router-dom";

export default function Fila() {
  const {data} = useHook()
  const {id} = useParams()

  const user = data[id-1].filas[4]
  useEffect(()=>{
    console.log(user);
  },[data])

  return(
    <div>
      <article>
        <h3>oi</h3>
      </article>
    </div>
  )
}