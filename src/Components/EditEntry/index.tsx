import React from "react";
import { useParams } from "react-router-dom";
export default function EditEntry() {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>TESTING ID: {id}</h1>
    </div>
  );
}
