import { createContext, useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import ding from "./ding.mp3"

export const Context= createContext({})

export function ContextProvider({children}){
  const url = "http://127.0.0.1:8080/"
  const [data, setData] =useState();

  useEffect(() =>{
    Axios.get(url+"allFilas")
    .then(res => res.data !== data ? setData(res.data) : null)
    .catch(err => console.log("erro: "+ err.code))
  }, [setTimeout(() =>{},1000)])

  const [timer,setTimer]=useState(30)
  const [timer2,setTimer2]=useState(60)

  useEffect(()=>{
    setTimeout(()=>{
      if (timer2 >= 0) { 
        setTimer(timer-1)   
        setTimer2(timer2-1)  
      }
    },60000) //1min
  },[timer])
  // não to consiguindo resetar ao excluir usuario
  console.log(timer);

  function delData(id,index) {
    Axios.delete(url+"delUser/"+id)
    .then(res => console.log("del id: "+id))
    .catch(err => console.log("erro: "+ err))

    const audio = new Audio(ding)
    if (index == 0) {
      audio.play()
      setTimer(timer+60)
      setTimer2(timer2<= 0? timer2+60 : timer2+30)
    }
  }

  ///////

  const [addData,setAddData]=useState({name:'',priority:1})
  const nav=useNavigate()
  
  function postData() {
    if (addData.name.length <= 3) return

    Axios.post(url+"addUser",addData)
    .then(e=>{
      console.log("postData: " + e)
      setAddData({name:"",priority:1})
      nav("/")
    })
    .catch(err=>console.log(err))
  }

  function Animation({type}) {
    return(
      <><animate
        attributeName="opacity"
        values={type == "rotate"?"1;1;1":"0;1;0"}
        dur="2s"
        repeatCount="indefinite"
      ></animate>
      {
        type == "rotate"?
        <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="5s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
        ></animateTransform>
        :
        <animateTransform
        attributeName="transform"
        attributeType="XML"
        dur="2s"
        type="translate"
        from="-50 0"
        to="50 0"
        repeatCount="indefinite"
        ></animateTransform>
      }
      </>
    )
  }

  return(
    <Context.Provider
      value={{
        data,
        delData,
        addData,setAddData,
        postData,
        Animation,
        timer,timer2
      }}
    >
      {children}
    </Context.Provider>
  )
}