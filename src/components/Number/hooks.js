import { useEffect, useState } from "react";

const useNumbersApi = (numberId) => {
  const [numberValue, setNumberValue] = useState("");

  useEffect(() => {
    fetch(`http://numbersapi.com/${numberId}`)
      .then((res) => res.text())
      .then((data) => setNumberValue(data));
  }, [numberId]);

  return numberValue;
};

export { useNumbersApi };
