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
  Button,
  Menu,
  Stack,
} from "@mui/material";
import { DRAWER_WIDTH } from "../App";
import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ListDrawer({ open, data, handleClick }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    console.log("fired");
    setAnchorEl(event.currentTarget);
  };
  const handleClickMenuItem = (e, val) => {
    e.preventDefault();
    setSort(val);
    handleChange();
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [sort, setSort] = useState("allAsc");
  const [names, setNames] = useState(
    data.slice().sort((a, b) => (a.name > b.name ? 1 : -1))
  );
  const [alpha, setAlpha] = useState(true);
  const types = data
    .filter((item) => item.type !== "")
    .map((item) => item.type);

  function handleChange(e) {
    const val = e.target.value;
    setSort(val);
    setAlpha(val === "allAsc" || val === "allDes" ? true : false);
    setNames(data.slice().sort((a, b) => compareNames(a.name, b.name)));
  }

  const compareNames = (a, b) => {
    switch (sort) {
      case "allAsc":
        return a > b ? -1 : 1;
      case "allDes":
        return a > b ? 1 : -1;
      default:
        break;
    }
  };

  useEffect(() => {
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
        {/*  <FormControl
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
            {/* <MenuItem value="typeDes">Type Z-A</MenuItem> 
          </Select>
        </FormControl> */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            {sort === "type" ? "Type" : "All"}
          </Typography>
          <Button
            id="sortby-button"
            aria-controls={menuOpen ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={menuOpen ? "true" : undefined}
            onClick={handleClickMenu}
            variant="outlined"
            color="success"
            sx={{ mr: 3, maxHeight: "80%" }}
          >
            Sort By
          </Button>
          <Menu
            id="sortby-menu"
            anchorEl={anchorEl}
            open={menuOpen}
            // onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={(e) => handleClickMenuItem(e, "allAsc")}>
              All A-Z
            </MenuItem>
            <MenuItem onClick={(e) => handleClickMenuItem(e, "allDes")}>
              All Z-A
            </MenuItem>
            <MenuItem onClick={(e) => handleClickMenuItem(e, "typeAsc")}>
              Type
            </MenuItem>
            {/* <MenuItem onClick={()=>handleClickMenu('typeDes')}>Type</MenuItem> */}
          </Menu>
        </Stack>
        {alpha ? (
          <>
            <List>
              {names.map((item) => {
                return (
                  <ListItem key={item.id}>
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
            <List>
              {types.map((item) => {
                return (
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
                );
              })}
            </List>
          </>
        )}
      </Drawer>
    </Box>
  );
}
