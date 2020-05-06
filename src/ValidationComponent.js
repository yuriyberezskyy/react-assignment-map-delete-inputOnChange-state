import React from "react";

export default function ValidationComponent(props) {
  return (
    <div>{props.sen.length < 5 ? "Text too short" : "Text long enough"}</div>
  );
}
