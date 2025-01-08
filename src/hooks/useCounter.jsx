import { useCallback, useState } from "react";

export const useCounter = () =>{
  const [count, setCount] = useState(1);
  const [isshow, setIshhow] = useState(true);

  const handleClick = useCallback((e) =>{
    // foo = foo + 1;
    if (count < 10){
      setCount( (prevcount) => prevcount +1 );
    }
  },[count]);

  const handleDisplay = useCallback(() =>{
    setIshhow((previsshow) =>  !previsshow);
  }, []);

  return{count, isshow, handleClick, handleDisplay};
};