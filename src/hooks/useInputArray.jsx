import { useCallback, useState } from "react";

export const useInputArray = () =>{
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if(e.target.value.length > 5){
      alert("5文字以内にしてください")
      return;
    }
     setText(e.target.value.trim())
  },[]);

  const handleadd = useCallback(()=>{
    setArray((prevarray)=>{
      if (prevarray.some(item => item === text)){
        alert("同じ要素が既に存在します。")
        return prevarray;
      }
      return [...prevarray, text]
    });
  },[text])

  return{text, array, handleChange,handleadd}

}