import React from "react";
import Box from "@mui/material/Box";
import TopBar from "../../DashboardRight/TopBar";
import {
  FaAngleDown,
  FaGear,
  FaUserLarge,
  FaFileImport,
  FaArrowDown,
} from "react-icons/fa6";
import CustomButton from "../../../microComponents/CustomButton";
function Contact() {
  return (
    <Box>
      <TopBar message="Your contacts">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomButton Icon={FaGear} LightText="Contact settings" />
          <CustomButton
            Icon={FaFileImport}
            LightText="Import leads"
            sx={{ marginLeft: "1rem" }}
          />
          <CustomButton
            Icon={FaUserLarge}
            DarkText="4yourbrand"
            AfterIcon={FaAngleDown}
            sx={{ marginLeft: "1rem" }}
          />
        </Box>
      </TopBar>
      <Box
        sx={{
          background: "white",
          marginTop: "3rem",
          height: "500px",
          borderRadius: "0px 15px 50px 15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            padding: "1.2rem",
            borderRadius: "0px 15px 0px 0px",
            background: "#d0e2cf",
          }}
        >
          <button
            style={{
              border: "none",
              background: "none",
              fontSize: "0.9rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Sort
            <FaAngleDown
              style={{ marginTop: "0.08rem", marginLeft: "0.2rem" }}
            />
          </button>
          <button
            style={{
              border: "none",
              background: "none",
              fontSize: "0.9rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "'Poppins', sans-serif",
              marginLeft: "1.5rem",
            }}
          >
            Label
            <FaAngleDown
              style={{ marginTop: "0.08rem", marginLeft: "0.2rem" }}
            />
          </button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
