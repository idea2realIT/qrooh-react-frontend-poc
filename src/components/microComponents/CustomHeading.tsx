import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";
function CustomHeading({ children, sx }: { children: ReactNode; sx?: Object }) {
  const headingStyle = {
    fontWeight: 700,
    fontFamily: "'Poppins', sans-serif",
    color: "#355f44",
    fontSize: "1.8rem !important",
    ...sx,
  };

  return (
    <Typography variant="h4" component="h3" sx={headingStyle}>
      {children}
    </Typography>
  );
}

export default CustomHeading;
