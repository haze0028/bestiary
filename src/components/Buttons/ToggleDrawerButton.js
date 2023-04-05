import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export function ToggleDrawerButton({ handleClick, drawer }) {
  return (
    <Button
      onClick={() => handleClick("drawer")}
      variant="contained"
      color="success"
      sx={{ position: "absolute", bottom: 30, left: 30 }}
      startIcon={drawer ? <ChevronLeft /> : <ChevronRight />}
    >
      {!drawer ? "View Bestiary List" : "Close Bestiary List"}
    </Button>
  );
}
