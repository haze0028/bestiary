import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Add } from "@mui/icons-material";

export default function NewButton() {
  return (
    <Button
      variant="contained"
      sx={{ position: "fixed", bottom: 30, right: 30 }}
      startIcon={<Add />}
    >
      New Entry
    </Button>
  );
}
