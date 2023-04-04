import { Drawer, Box, Link } from "@mui/material";
import { DRAWER_WIDTH } from "../App";

export default function List({ open, data, handleClick }) {
  return (
    <Box sx={{ position: "relative" }}>
      <Drawer
        anchor="left"
        open={open}
        variant="persistent"
        sx={(theme) => ({
          "& .MuiPaper-root": {
            width: DRAWER_WIDTH,
            backgroundColor: "transparent",
            padding: theme.spacing(2),
          },
        })}
      >
        <ul>
          {data.map((item) => {
            return (
              <li>
                <Link
                  href="/"
                  onClick={(e) => handleClick(e, item)}
                  color="inherit"
                  variant="body1"
                  underline="hover"
                  sx={(theme) => ({ fontSize: "1.5rem" })}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </Drawer>
    </Box>
  );
}
