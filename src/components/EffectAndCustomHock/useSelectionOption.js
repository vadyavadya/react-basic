import { useEffect, useState } from "react";
import { fetchData } from "./api";

export function useSelectionOption(url) {
  const [selectedId, setSelectedId] = useState([]);
  const [selectId, setSelectId] = useState("");

  useEffect(() => {
    if (url === null) {
      return;
    }
    let ignore = false;
    fetchData(url).then(result => {
      if (!ignore) {
        console.log(`fetch a list url=${url}`);
        setSelectedId(result);
        setSelectId(result[0].id);
      }
    });
    return () => {
      ignore = true;
    };
  }, [url]);

  return [selectedId, selectId, setSelectId];
}
