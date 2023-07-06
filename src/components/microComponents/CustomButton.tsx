import React from "react";
import { IconType } from "react-icons";

export default function CustomButton({
  Icon,
  LightText,
  DarkText,
  AfterIcon,
  sx,
}: {
  Icon?: IconType;
  LightText?: string;
  DarkText?: string;
  AfterIcon?: IconType;
  sx?: Object;
}) {
  const buttonStyle = {
    border: "none",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "0.7rem",
    background: "#d0e2cf",
    borderRadius: "15px",
    color: "#355f44",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1.01rem",
  };
  const combineStyle = {
    ...buttonStyle,
    ...sx,
  };
  return (
    <button type="button" style={combineStyle}>
      {Icon ? (
        <>
          <Icon style={{ color: "#a9c1ac", fontSize: "1.3rem" }} />
          &nbsp; &nbsp;
        </>
      ) : (
        ""
      )}
      {LightText ? <>{LightText} &nbsp;</> : ""}
      {DarkText ? (
        <>
          <span style={{ fontWeight: 700 }}> {DarkText}</span> &nbsp;
        </>
      ) : (
        ""
      )}
      {AfterIcon ? <AfterIcon /> : ""}
    </button>
  );
}
