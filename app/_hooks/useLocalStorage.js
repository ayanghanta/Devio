import { useEffect, useState } from "react";

export function useLocalStorage() {
  const [localStorageData, setLocalStorageData] = useState({});

  useEffect(function () {
    setLocalStorageData(JSON.parse(localStorage.getItem("Indev") || "{}"));
  }, []);

  useEffect(
    function () {
      localStorage.setItem("Indev", JSON.stringify(localStorageData));
    },
    [localStorageData]
  );

  function handleUpdateLocalStorage(key, newValue) {
    setLocalStorageData((prev) => ({ ...prev, [key]: newValue }));
  }
  return { localStorageData, handleUpdateLocalStorage };
}
