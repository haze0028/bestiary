import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import blood from "../images/blood2.png";

const Root = styled("header")(({ theme }) => ({
  position: "relative",

  "& h1": {
    textAlign: "right",
    zIndex: 10,
    color: "white",
    textShadow: "2px 2px 2px black",
  },

  "& .headerImage": {
    height: "6rem",
    width: "20rem",
    transform: "scaleY(-0.8) translate(35px, -20px) rotate(355deg)",
    position: "absolute",
    right: 0,
    zIndex: 0,
  },
}));

export default function AppHeader() {
  return (
    <Root>
      <img src={blood} alt="header background blood" className="headerImage" />
      <Typography variant="h1" className="header">
        Bestiary
      </Typography>
    </Root>
  );
}
