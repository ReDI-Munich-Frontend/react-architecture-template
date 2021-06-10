import React from "react";
import { useParams } from "react-router-dom";
import { useNumbersApi } from "./hooks";

function Number() {
  const { numberId } = useParams();
  const numberValue = useNumbersApi(numberId);

  return (
    <h2 aria-label="number">
      {numberId} - {numberValue}
    </h2>
  );
}

export { Number };
