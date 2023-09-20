import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import ding from './ding.mp3'

export default function useHook(){
  const [data, setData] =useState();

  function notiAudio(){
    const audio = new Audio(ding)
    audio.play()
  } 
  
  async function getData() {
    const get =await Axios.get("http://127.0.0.1:8080/allFilas")
    .then(res => res.data)
    .catch(err => console.log("erro: "+ err.code))
    
    if (get != data) {
      setData(get)
    }
    return
  }

  useEffect(() =>{
    getData()
  }, [setTimeout(() =>{},1000)])

  function delData(params) {
    Axios.delete("http://127.0.0.1:8080/delUser/"+params)
    .then(res => console.log("del id: "+params))
    .catch(err => console.log("erro: "+ err))

    notiAudio()
  }

  ///////

  const [addData,setAddData]=useState(
    {name:'',priority:1}
  )
  const nav=useNavigate()
  
  function postData() {
    if (addData.name.length < 1) {
      console.log("sem nome");
      return;
    }

    Axios.post("http://127.0.0.1:8080/addUser",addData)
    .then(e=>{
      console.log("postData: " + e)
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

  return {data,delData,addData,setAddData,postData,Animation}
}