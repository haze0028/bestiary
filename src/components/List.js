import { useState } from "react";
import {
  Drawer,
  Button,
  ClickAwayListener,
  Box,
  Typography,
} from "@mui/material";
import { DRAWER_WIDTH } from "../App";

export default function List({ open, handleOpen, handleClose, data }) {
  return (
    // <ClickAwayListener onClickAway={handleClose}>
    <Box sx={{ position: "relative" }}>
      <Drawer
        anchor="left"
        open={open}
        variant="persistent"
        sx={{
          "& .MuiPaper-root": {
            width: DRAWER_WIDTH,
          },
        }}
      >
        {data.map((item) => {
          return (
            <ul>
              <li>
                <Typography>{item.name}</Typography>
              </li>
            </ul>
          );
        })}
      </Drawer>
    </Box>
    // </ClickAwayListener>
  );
}
