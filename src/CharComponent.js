import React from "react";

export default function CharComponent(props) {
  const styleComp = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
  };

  return (
    <div style={styleComp} onClick={props.deleteCharHandle}>
      {props.charName}
    </div>
  );
}
