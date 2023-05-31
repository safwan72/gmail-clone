import React from "react";
import { Container, useTheme } from "@mui/material";
import Footer from "../Footer/Footer";

const HOC = ({ children }) => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      sx={{
        pl: 5,
        pr: 8,
        width: "95%",
        margin: "auto",
        [theme.breakpoints.down("md")]: {
          pl: 3,
          pr: 3,
        },
        [theme.breakpoints.down("sm")]: {
          pl: 4,
          pr: 0,
        },
      }}
      fixed
    >
      {children}
      <Footer />
    </Container>
  );
};

export default HOC;
