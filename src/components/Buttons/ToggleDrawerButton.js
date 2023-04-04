import { Button } from "@mui/material";

export function ToggleDrawerButton({ handleClick, drawer }) {
  return (
    <Button
      onClick={() => handleClick("drawer")}
      variant="contained"
      color="success"
      sx={{ position: "absolute", bottom: 30, left: 30 }}
    >
      {!drawer ? "View Bestiary List" : "Close Bestiary List"}
    </Button>
  );
}
