import Entry from "./components/Entries/Entry";
import List from "./components/List";
import NewButton from "./components/Entries/NewButton";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import clsx from "clsx";
import data from "./fakedata";

export const DRAWER_WIDTH = 300;

const Root = styled("div")(({ theme }) => ({
  "& .App": {
    display: "flex",
    "& .listBox": {
      transition: "300ms",
    },
    "& .entryBox": {
      flex: 1,
      margin: theme.spacing(5),
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

  const handleOpen = (item) => {
    console.log(open);
    setOpen({ ...open, drawer: true });
  };

  const handleClose = (item) => {
    console.log(open);
    setOpen({ ...open, drawer: false });
  };

  const toggleOpen = (item) => {
    console.log(item);
    setOpen({ ...open, [item]: true });
    console.log(open);
  };

  useEffect(() => {
    console.clear();
  }, []);

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
            data={data}
          />
        </Box>
        <Box className="entryBox">
          <Button
            onClick={() => handleOpen("drawer")}
            variant="contained"
            color="success"
          >
            View Bestiary List
          </Button>
          <Button
            onClick={() => handleClose("drawer")}
            variant="contained"
            color="success"
          >
            Close Bestiary List
          </Button>
          <Entry monster={data[0]} />
        </Box>
        <NewButton />
      </div>
    </Root>
  );
}

export default App;
