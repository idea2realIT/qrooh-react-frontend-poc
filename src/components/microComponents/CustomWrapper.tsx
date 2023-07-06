import { Box } from "@mui/material";
import React, { ReactNode } from "react";

function CustomWrapper({ children, sx }: { children: ReactNode; sx: Object }) {
  const OuterDivStyle = {
    height: "300px",
    width: "100%",
    background: "white",
    borderRadius: "15px 15px 50px 15px",
    paddingX: "1.5rem",
    ...sx,
  };
  return <Box sx={OuterDivStyle}>{children}</Box>;
}

export default CustomWrapper;
