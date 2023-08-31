import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useHook(){
  const [data, setData] =useState();

  async function getData() {
    setData(
      await Axios.get("http://127.0.0.1:8080/allFilas")
      .then(res => res.data)
      .catch(err => console.log("erro: "+ err.code))
    )
  }

  useEffect(() =>{
    getData()
  }, [setTimeout(() =>{},1000)])

  function delData(params) {
    Axios.delete("http://127.0.0.1:8080/delUser/"+params)
    .then(res => console.log("del id: "+params))
    .catch(err => console.log("erro: "+ err))
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

  return {data,delData,addData,setAddData,postData}
}