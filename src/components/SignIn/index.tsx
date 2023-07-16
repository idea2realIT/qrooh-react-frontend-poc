import React, { useEffect } from "react";
import { Box } from "@mui/material";
import BackgroundImage from "../../images/background.webp";
import logo from "../../images/logoQ.png";
import name from "../../images/name.png";
import CustomHeading from "../microComponents/CustomHeading";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import urlFunctionsObject from "api/Uri";
import Cookies from "js-cookie";
function Index() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/dashboard/analytics");
    }
  }, [navigate]);
  return (
    <Box sx={{ display: "flex", height: "100vh", position: "relative" }}>
      <Box
        sx={{
          width: "50%",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            background: "#59b947",
            left: "0",
            top: "0",
            opacity: "0.3",
          }}
        ></div>
        <img
          src={logo}
          alt="logo"
          style={{
            position: "absolute",
            transformOrigin: "center",
            transform: "translate(-50%,-50%)",
            top: "50%",
            left: "50%",
            height: "13.5rem",
            width: "13.5rem",
          }}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          padding: "2.3rem",
          width: "50%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <img
              src={name}
              alt="named-logo"
              style={{ width: "9.375rem", height: "3.25rem" }}
            />
          </Box>
          <Box
            sx={{
              width: "30.2rem",
              margin: "auto",
            }}
          >
            <CustomHeading sx={{ marginTop: "1.5rem" }}>
              Welcome back!
            </CustomHeading>
            <form
              style={{
                background: "white",
                marginTop: "3.5rem",
                display: "flex",
                flexDirection: "column",
                fontWeight: "600",
              }}
              onSubmit={() => {
                navigate("/dashboard/analytics");
              }}
            >
              <label style={{ color: "#355f44", fontSize: "0.9rem" }}>
                E-mail
              </label>
              <input
                className="sign-in-input"
                style={{
                  marginTop: "1rem",
                  border: "2px solid #eaefec",
                  borderRadius: "10px",
                  background: "#eef8ec",
                  height: "3.5rem",
                }}
                placeholder="thom@4yourbrand.io"
              />
              <label
                style={{
                  marginTop: "1.4rem",
                  color: "#355f44",
                  fontSize: "0.9rem",
                }}
              >
                Password
              </label>
              <input
                style={{
                  marginTop: "1rem",
                  border: "2px solid #eaefec",
                  borderRadius: "10px",
                  background: "#eef8ec",
                  height: "3.5rem",
                }}
                placeholder="••••••••••••••••••••"
              />
              <a
                href="/forgot-password"
                style={{
                  fontSize: "0.8rem",
                  textDecoration: "underline",
                  marginTop: "1.1rem",
                  fontWeight: "400",
                  color: "#b3b3b3",
                }}
              >
                Forgot your password?
              </a>
              <button
                type="submit"
                style={{
                  border: "none",
                  marginTop: "2rem",
                  height: "3.6rem",
                  background: "#59b947",
                  borderRadius: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  position: "relative",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Sign in
                <span>
                  <FaArrowRightToBracket
                    style={{
                      height: "1.3rem",
                      width: "1.3rem",
                      position: "absolute",
                      right: "2rem",
                      top: "35%",
                    }}
                  />
                </span>
              </button>
            </form>
            <Divider sx={{ marginY: "1.6rem" }} />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href={urlFunctionsObject.signInWithGoogle()}
                style={{
                  border: "2px solid #eaefec",
                  background: "white",
                  borderRadius: "1rem",
                  height: "3.7rem",
                  cursor: "pointer",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FcGoogle style={{ height: "2rem", width: "2rem" }} />
              </a>
              <Box sx={{ margin: "auto", marginTop: "2.5rem" }}>
                <span
                  style={{
                    color: "#355f44",
                    fontSize: "0.82rem",
                    fontWeight: "700",
                  }}
                >
                  New to Qrooh?{" "}
                  <a
                    style={{ color: "#355f44", fontWeight: "400" }}
                    href="/create-account"
                  >
                    Create a free account!
                  </a>
                </span>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              marginTop: "2.4rem",
            }}
          >
            <a
              href="/support"
              style={{
                textDecoration: "none",
                background: "#355f44",
                height: "2.4rem",
                fontSize: "0.85rem",
                fontWeight: "700",
                color: "white",
                padding: "0.8rem 2.6rem",
                borderRadius: "12px 12px 0px 12px",
              }}
            >
              Support?
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Index;
