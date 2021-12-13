import React from "react";
import { useState, useEffect } from "react";
import Board from "../components/Board";

export default function Game() {
  const [id, setId] = useState(0);

  useEffect(() => {
    console.log(id);
  }, [id]);

  return <Board />;
}
