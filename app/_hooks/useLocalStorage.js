import { useEffect, useState } from "react";

export function useLocalStorage() {
  const [localStorageData, setLocalStorageData] = useState({});

  useEffect(function () {
    setLocalStorageData(JSON.parse(localStorage.getItem("devio") || "{}"));
  }, []);

  useEffect(
    function () {
      localStorage.setItem("devio", JSON.stringify(localStorageData));
    },
    [localStorageData]
  );

  function handleUpdateLocalStorage(key, newValue) {
    setLocalStorageData((prev) => ({ ...prev, [key]: newValue }));
  }
  return { localStorageData, handleUpdateLocalStorage };
}
