import { IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ClearFieldButton({ clickHandler }) {
  return (
    <Tooltip title="Clear" arrow>
      <IconButton
        sx={{ width: 40, height: 40 }}
        onClick={clickHandler}
        edge="end"
      >
        <CloseIcon />
      </IconButton>
    </Tooltip>
  );
}
