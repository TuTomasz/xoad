import React from "react";
import { useState, useEffect } from "react";
import Xoad from "../components/xoad";

export default function Game() {
  const [id, setId] = useState(0);

  useEffect(() => {
    console.log(id);
  }, [id]);

  return <Xoad />;
}
