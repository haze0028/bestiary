import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

export default function SelectField({
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
    <div>
      <Button
        id="selectFieldButton"
        aria-controls={open ? "selectFieldMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        sx={{ width: "80%", mb: 2 }}
      >
        More Creature Features
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
        {
          // Object.keys(menuItems)
          // .filter((k) => !menuItems[k])
          menuItems.map((item) => {
            return (
              <MenuItem
                onClick={() => handleSelectItem(item)}
                key={item}
                selected={item === selected}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </MenuItem>
            );
          })
        }
      </Menu>
    </div>
  );
}
