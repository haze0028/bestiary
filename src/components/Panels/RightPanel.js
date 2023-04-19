import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";
import CreatureCard from "../Entries/CreatureCard";
import NewButton from "../Buttons/NewEntryButton";
import { ToggleDrawerButton } from "../Buttons/ToggleDrawerButton";
import AppHeader from "../AppHeader";

const Root = styled(Box)(({ theme }) => ({
  flex: 1,
  position: "relative",
  maxWidth: theme.spacing(150),
  height: "100vh",
  margin: "auto",
  "& .content": {
    padding: theme.spacing(5),
    height: "100%",
    boxSizing: "border-box",
  },
  "& .fadeIn": {
    opacity: 1,
  },
  "& .fadeOut": {
    opacity: 0,
  },
}));

export default function RightPanel({
  creature,
  drawerOpen,
  fade,
  handleCloseCard,
  handleNewClick,
  handleToggleDrawer,
}) {
  return (
    <Root className="rightPanel">
      <Stack direction="column" className="content">
        <AppHeader />
        <Box
          className={fade && "fadeIn"}
          sx={{
            transition: "1s",
            opacity: 0,
            flex: 1,
            overflowY: "auto",
            borderRadius: (theme) => theme.spacing(1),
          }}
        >
          {creature && (
            <CreatureCard
              creature={creature}
              handleClickClose={handleCloseCard}
            />
          )}
        </Box>
        <ToggleDrawerButton
          drawer={drawerOpen}
          handleClick={handleToggleDrawer}
          shift={creature}
        />
        <NewButton handleClick={handleNewClick} shift={creature} />
        <Box
          sx={{
            display: "block",
            width: "100%",
            height: (theme) => theme.spacing(10),
          }}
        />
      </Stack>
    </Root>
  );
}
