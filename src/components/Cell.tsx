import React from "react";

import circle from "../assets/circle.svg";
import x from "../assets/x.svg";
import square from "../assets/square.svg";
import triangle from "../assets/triangle.svg";
import "./Cell.css";
interface Props {
  shape: string;
}

export default function Cell({ shape }: Props) {
  switch (shape) {
    case "X":
      return <img src={x} alt="cross" />;

    case "O":
      return <img src={circle} alt="circle" />;

    case "S":
      return <img src={square} alt="square" />;

    case "T":
      return <img src={triangle} alt="triangle" />;

    default:
      return <img alt="" />;
  }
}
