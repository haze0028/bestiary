import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function NewEntryButton() {
  return (
    <Button
      variant="contained"
      sx={{ position: "absolute", bottom: 30, right: 30 }}
      startIcon={<Add />}
    >
      New Entry
    </Button>
  );
}
