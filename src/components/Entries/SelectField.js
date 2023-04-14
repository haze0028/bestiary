import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

export default function SelectFieldMenu({
  handleSelectField,
  menuItems,
  selected,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleSelectItem(field) {
    handleClose();
    handleSelectField(field);
  }

  return (
    <>
      <Button
        id="selectFieldButton"
        aria-controls={open ? "selectFieldMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        color="secondary"
        sx={{ mr: 1 }}
      >
        Add Details
      </Button>
      <Menu
        id="selectFieldMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "selectFieldButton",
        }}
      >
        {menuItems.map((item) => {
          return (
            <MenuItem
              onClick={() => handleSelectItem(item)}
              key={item}
              selected={item === selected}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
