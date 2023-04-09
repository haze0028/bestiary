import { useState } from "react";
import { styled } from "@mui/system";
import clsx from "clsx";
import "./app.css";

import data from "./fakedata";
import { Box, Typography } from "@mui/material";
import MonsterCard from "./components/Entries/MonsterCard";
import NewButton from "./components/Buttons/NewEntryButton";
import { ToggleDrawerButton } from "./components/Buttons/ToggleDrawerButton";
import ListDrawer from "./components/List";
import blood from "./images/blood2.png";
import Todo from "./components/Todo";

export const DRAWER_WIDTH = 360;

const Root = styled("div")(({ theme }) => ({
  "& .App": {
    display: "flex",
    "& .leftPanel": {
      transition: "300ms",
      height: "100vh",
      "&.drawerOpen": {
        width: DRAWER_WIDTH,
      },
      "&.drawerClosed": {
        width: 0,
      },
    },
    "& .rightPanel": {
      flex: 1,
      position: "relative",
      height: "100vh",
      "& .content": {
        padding: theme.spacing(5),
        maxWidth: theme.spacing(150),
        margin: "auto",
      },
    },
    "& .fadeIn": {
      opacity: 1,
    },
    "& .fadeOut": {
      opacity: 0,
    },
  },
}));

function App() {
  const [open, setOpen] = useState({
    drawer: true,
    card: true,
  });
  const [monster, setMonster] = useState();
  const [fade, setFade] = useState();

  const handleClose = (item) => {
    console.log(open);
    setOpen({ ...open, drawer: false });
  };

  const handleToggleDrawer = () => {
    setOpen({ ...open, drawer: !open.drawer });
  };

  const handleListItemClick = (e, item) => {
    e.preventDefault();
    setMonster(item);
    setTimeout(function () {
      setFade(true);
    }, 1000);
  };

  const handleCloseCard = () => {
    setFade(false);
    setTimeout(function () {
      setMonster(null);
    }, 1000);
  };

  const handleNewClick = () => {
    //
  };

  return (
    <Root>
      <div className="App">
        <Box
          className={clsx("leftPanel", {
            drawerOpen: open.drawer,
            drawerClosed: !open.drawer,
          })}
        >
          <ListDrawer
            open={open.drawer}
            handleClose={() => handleClose("drawer")}
            handleClick={handleListItemClick}
            data={data}
          />
        </Box>
        <Box className="rightPanel">
          <div className="content">
            <header>
              <img src={blood} alt="header background blood" id="headerImage" />
              <Typography
                variant="h1"
                className="header"
                sx={{ textAlign: "right", fontWeight: "bold" }}
              >
                Bestiary
              </Typography>
            </header>
            <Todo />
            <Box
              className={fade && "fadeIn"}
              sx={{ transition: "1s", opacity: 0 }}
            >
              {monster && (
                <MonsterCard
                  monster={monster}
                  handleClickClose={handleCloseCard}
                />
              )}
            </Box>
            <ToggleDrawerButton
              drawer={open.drawer}
              handleClick={handleToggleDrawer}
              shift={monster}
            />
            <NewButton handleClick={handleNewClick} shift={monster} />
          </div>
        </Box>
      </div>
    </Root>
  );
}

export default App;
