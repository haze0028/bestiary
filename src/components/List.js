import {
  Drawer,
  Box,
  Link,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Divider,
  ListItem,
  List,
  ListItemIcon,
  // Button,
  // Menu,
} from "@mui/material";
import { DRAWER_WIDTH } from "../App";
import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ListDrawer({ open, data, handleClick }) {
  // const [anchorEl, setAnchorEl] = useState(null);
  // const menuOpen = Boolean(anchorEl);
  // const handleClickMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const handleClickMenuItem = (e) => {
  //   setAnchorEl(null);
  // };
  const [sort, setSort] = useState("allAsc");
  const [names, setNames] = useState(data);
  const [alpha, setAlpha] = useState(true);
  const types = data
    .filter((item) => item.type !== "")
    .map((item) => item.type);

  function handleChange(e) {
    const val = e.target.value;
    setSort(val);
    setAlpha(val === "allAsc" || val === "allDes" ? true : false);
    setNames(data.sort((a, b) => compareNames(a.name, b.name)));
  }

  const compareNames = (a, b) => {
    switch (sort) {
      case "allAsc":
        return a > b ? 1 : -1;
      case "allDes":
        return b > a ? 1 : -1;
      default:
        break;
    }
  };

  useEffect(() => {
    setNames(data.sort((a, b) => compareNames(a.name, b.name)));
    console.log(types);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Monsters
        </Typography>
        <FormControl
          variant="standard"
          sx={{
            width: "90%",
            mb: 2,
            "& label.Mui-focused": {
              color: "brown",
            },
            "& .MuiInputBase-root.MuiInput-root::after": {
              borderBottomColor: "brown",
            },
          }}
        >
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by-select"
            value={sort}
            label="Sort by"
            onChange={handleChange}
          >
            <MenuItem value="allAsc">All A-Z</MenuItem>
            <MenuItem value="allDes">All Z-A</MenuItem>
            <Divider />
            <MenuItem value="typeAsc">Type</MenuItem>
            {/* <MenuItem value="typeDes">Type Z-A</MenuItem> */}
          </Select>
        </FormControl>
        {/* <Button
          id="basic-button"
          aria-controls={menuOpen ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={menuOpen ? "true" : undefined}
          onClick={handleClickMenu}
        >
          Sort By
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClickMenuItem} value="profile">
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu> */}
        {alpha ? (
          <>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              All
            </Typography>
            <List>
              {names.map((item) => {
                return (
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "unset" }}>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
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
                  </ListItem>
                );
              })}
            </List>
          </>
        ) : (
          <>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Types
            </Typography>
            <List>
              {types.map((item) => {
                return (
                  <>
                    <ListItem
                      key={item}
                      sx={{
                        flexDirection: "column",
                        alignItems: "start",
                        pl: 0,
                      }}
                    >
                      <Typography variant="h4">{item}</Typography>
                      <List>
                        {names
                          .filter((name) => name.type === item)
                          .map((creature) => {
                            return (
                              <ListItem key={creature.id}>
                                <ListItemIcon sx={{ minWidth: "unset" }}>
                                  <ArrowForwardIosIcon />
                                </ListItemIcon>
                                <Link
                                  href="/"
                                  onClick={(e) => handleClick(e, creature)}
                                  color="inherit"
                                  variant="body1"
                                  underline="hover"
                                  sx={(theme) => ({ fontSize: "1.5rem" })}
                                >
                                  {creature.name}
                                </Link>
                              </ListItem>
                            );
                          })}
                      </List>
                    </ListItem>
                  </>
                );
              })}
            </List>
          </>
        )}
      </Drawer>
    </Box>
  );
}
