import { useState } from "react";
import NewCreatureDialog from "./components/Entries/NewCreatureDialog";
import LeftPanel from "./components/Panels/LeftPanel";
import RightPanel from "./components/Panels/RightPanel";

import data from "./fakedata";
import "./app.css";
import { Stack } from "@mui/material";

function App() {
  const [open, setOpen] = useState({
    drawer: true,
    dialog: false,
  });
  const [creature, setCreature] = useState();
  const [fade, setFade] = useState();

  const handleClose = (item) => {
    setOpen({ ...open, drawer: false });
  };

  const handleToggleDrawer = () => {
    setOpen({ ...open, drawer: !open.drawer });
  };

  const handleListItemClick = (e, item) => {
    e.preventDefault();
    setCreature(item);
    setTimeout(function () {
      setFade(true);
    }, 1000);
  };

  const handleCloseCard = () => {
    setFade(false);
    setTimeout(function () {
      setCreature(null);
    }, 1000);
  };

  const handleNewClick = () => {
    setOpen({ ...open, dialog: true });
  };

  const handleNewClose = () => {
    setOpen({ ...open, dialog: false });
  };

  return (
    <Stack direction="row">
      <LeftPanel
        drawerOpen={open.drawer}
        handleClose={handleClose}
        data={data}
        handleListItemClick={handleListItemClick}
      />
      <RightPanel
        creature={creature}
        drawerOpen={open.drawer}
        fade={fade}
        handleCloseCard={handleCloseCard}
        handleNewClick={handleNewClick}
        handleToggleDrawer={handleToggleDrawer}
      />
      {open.dialog && (
        <NewCreatureDialog open={open.dialog} handleClose={handleNewClose} />
      )}
    </Stack>
  );
}

export default App;
