import { styled } from "@mui/system";
import { Box } from "@mui/material";
import ListDrawer from "../List";
import clsx from "clsx";
import { DRAWER_WIDTH } from "../../constants";
import oldPaper from "../../images/oldTimeyPaper.png";

const Root = styled(Box)(({ theme }) => ({
  transition: "300ms",
  height: "100vh",
  "&.drawerOpen": {
    width: DRAWER_WIDTH,
  },
  "&.drawerClosed": {
    width: 0,
  },

  "& .MuiPaper-root": {
    backgroundImage: `url(${oldPaper})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "400px 120%",
    backgroundAttachment: "local",
    backgroundPositionX: "right",
    backgroundPositionY: "center",
    border: "none",
  },
}));

export default function LeftPanel({
  drawerOpen,
  handleClose,
  data,
  handleListItemClick,
}) {
  return (
    <Root
      className={clsx({
        drawerOpen: drawerOpen,
        drawerClosed: !drawerOpen,
      })}
    >
      <ListDrawer
        open={drawerOpen}
        handleClose={() => handleClose("drawer")}
        handleClick={handleListItemClick}
        data={data}
      />
    </Root>
  );
}
