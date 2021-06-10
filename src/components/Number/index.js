import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Number() {
  const [numberValue, setNumberValue] = useState("");
  const { numberId } = useParams();

  useEffect(() => {
    fetch(`http://numbersapi.com/${numberId}`)
      .then((res) => res.text())
      .then((data) => setNumberValue(data));
  }, [numberId]);

  return (
    <h2>
      {numberId} - {numberValue}
    </h2>
  );
}

export { Number };
