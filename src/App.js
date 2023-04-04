import Entry from "./components/Entries/Entry";
import List from "./components/List";
import NewButton from "./components/Buttons/NewButton";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import clsx from "clsx";
import data from "./fakedata";
import { ToggleDrawerButton } from "./components/Buttons/ToggleDrawerButton";

export const DRAWER_WIDTH = 300;

const Root = styled("div")(({ theme }) => ({
  "& .App": {
    display: "flex",
    "& .listBox": {
      transition: "300ms",
      height: "100vh",
    },
    "& .entryBox": {
      flex: 1,
      position: "relative",
      height: "100vh",
      "& .content": {
        padding: theme.spacing(5),
      },
    },
  },
  "& .drawerOpen": {
    width: DRAWER_WIDTH,
  },
  "& .drawerClosed": {
    width: 0,
  },
}));

function App() {
  const [open, setOpen] = useState({
    drawer: true,
    card: true,
  });
  const [monster, setMonster] = useState();

  const handleOpen = (item) => {
    console.log(open);
    setOpen({ ...open, drawer: true });
  };

  const handleClose = (item) => {
    console.log(open);
    setOpen({ ...open, drawer: false });
  };

  const handleToggleDrawer = () => {
    setOpen({ ...open, drawer: !open.drawer });
  };

  const handleClick = (e, item) => {
    e.preventDefault();
    setMonster(item);
  };

  return (
    <Root>
      <div className="App">
        <Box
          className={clsx("listBox", {
            drawerOpen: open.drawer,
            drawerClosed: !open.drawer,
          })}
        >
          <List
            open={open.drawer}
            handleOpen={() => handleOpen("drawer")}
            handleClose={() => handleClose("drawer")}
            handleClick={handleClick}
            data={data}
          />
        </Box>
        <Box className="entryBox">
          <div className="content">
            <header>
              <h1 className="header">Bestiary</h1>
            </header>
            {monster && <Entry monster={monster} />}
            <ToggleDrawerButton
              drawer={open.drawer}
              handleClick={handleToggleDrawer}
            />
            <NewButton />
          </div>
        </Box>
      </div>
    </Root>
  );
}

export default App;
