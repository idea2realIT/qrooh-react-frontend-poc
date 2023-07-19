import Box from "@mui/material/Box";
import TopBar from "../../DashboardRight/TopBar";
import {
  FaAngleDown,
  FaGear,
  FaUserLarge,
  FaFileImport,
} from "react-icons/fa6";
import CustomButton from "components/microComponents/CustomButton";
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
      <Box>
        <Box
          sx={{
            background: "white",
            marginTop: "3rem",
            borderRadius: "0px 15px 50px 15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              padding: "1.5rem",
              borderRadius: "0px 15px 0px 0px",
              background: "#d0e2cf",
            }}
          >
            <button
              style={{
                border: "none",
                outline: "none",
                background: "none",
                fontSize: "1.05rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "700",
                color: "#355f44",
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
                fontSize: "1.05rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "700",
                marginLeft: "1.5rem",
                color: "#355f44",
              }}
            >
              Label
              <FaAngleDown
                style={{ marginTop: "0.08rem", marginLeft: "0.2rem" }}
              />
            </button>
          </Box>
          <Box sx={{ paddingX: "1.8rem" }}>
            {[1, 2, 3, 4, 5].map((e, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "colunmn",
                    color: "#355f44",
                    fontFamily: "'Poppins', sans-serif",
                    borderBottom: "2px solid #eaefec",
                    // paddingY: "1.78rem",
                    height: "6.25rem",
                  }}
                >
                  <address
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                      }}
                    >
                      John Doe
                    </span>
                    <span
                      style={{
                        display: "block",
                        marginTop: "0.35rem",
                        fontWeight: "400",
                      }}
                    >
                      Real Estate Service LLC
                    </span>
                  </address>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
