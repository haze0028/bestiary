import { useState } from "react";
import "./app.css";

import { Stack } from "@mui/material";
import NewCreatureDialog from "./components/Entries/NewCreatureDialog";
import LeftPanel from "./components/Panels/LeftPanel";
import RightPanel from "./components/Panels/RightPanel";

import data from "./fakedata";
import "../node_modules/rpg-awesome/css/rpg-awesome.min.css";

function App() {
  const [allData, setAllData] = useState(data);
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

  function handleSubmitEntry(newCreature) {
    setAllData((allData) => [...allData, newCreature]);
    setCreature(newCreature);
  }

  const handleNewClick = () => {
    setOpen({ ...open, dialog: true });
  };

  const handleNewClose = () => {
    setOpen({ ...open, dialog: false });
  };

  return (
    <>
      <Stack direction="row">
        <LeftPanel
          drawerOpen={open.drawer}
          handleClose={handleClose}
          data={allData}
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
          <NewCreatureDialog
            open={open.dialog}
            handleClose={handleNewClose}
            handleSubmitEntry={handleSubmitEntry}
          />
        )}
      </Stack>
    </>
  );
}

export default App;
