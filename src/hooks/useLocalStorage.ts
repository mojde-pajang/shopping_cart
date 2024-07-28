import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, data: T | (()=>T)) {

  const [value, setValue] = useState<T>(() => {

    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }

    if (typeof data === "function") {
      return (data as () => T)()
    }else {
      return data
    }
    
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify( value))
  }, [key, value])

  console.log(3, value, setValue)
return [value, setValue] as [typeof value, typeof setValue]

}

export default useLocalStorage