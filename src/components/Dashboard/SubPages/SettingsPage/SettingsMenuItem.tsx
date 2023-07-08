import { Box } from "@mui/material";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

const SettingsMenuItem = function ({
  Icon,
  title,
  link,
}: {
  Icon: IconType;
  title: string;
  link: string;
}) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          background: "#ffffff",
          height: "15.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Icon style={{ height: "3rem", width: "3rem", color: "#ccd7d0" }} />
          <span
            style={{
              display: "block",
              marginTop: "2rem",
              fontWeight: "700",
              fontSize: "2rem",
              color: "#355f44",
            }}
          >
            {title}
          </span>
        </Box>
      </Box>
    </Link>
  );
};
export default SettingsMenuItem;
