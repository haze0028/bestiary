import {
  Drawer,
  Box,
  Link,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  ListItem,
  List,
  ListItemIcon,
  Stack,
  IconButton,
  Popover,
} from "@mui/material";
import { DRAWER_WIDTH } from "../App";
import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FilterListIcon from "@mui/icons-material/FilterList";
import clsx from "clsx";

export default function ListDrawer({ open, data, handleClick }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const popopen = Boolean(anchorEl);

  const [sort, setSort] = useState("name");
  const [order, setOrder] = useState(true);
  const [names, setNames] = useState(
    data.slice().sort((a, b) => (a.name > b.name ? 1 : -1))
  );
  // const [alpha, setAlpha] = useState(true);
  const types = data
    .filter((item) => item.type !== "")
    .map((item) => item.type);

  function orderClickHandler() {
    setOrder(!order);
    setNames(data.slice().sort((a, b) => compareNames(a.name, b.name)));
  }

  function handleChange(e) {
    const val = e.target.value;
    setSort(val);
    setNames(data.slice().sort((a, b) => compareNames(a.name, b.name)));
  }

  const compareNames = (a, b) => {
    switch (order) {
      case true:
        return a > b ? -1 : 1;
      case false:
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
          Creatures
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControl
            variant="standard"
            sx={{
              width: "70%",
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
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="type">Type</MenuItem>
            </Select>
          </FormControl>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={popopen}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>{order ? "A-Z" : "Z-A"}</Typography>
          </Popover>
          <IconButton
            className={clsx("order-btn", {
              orderBtnDes: !order,
            })}
            sx={{ width: 40, height: 40 }}
            onClick={orderClickHandler}
            aria-owns={popopen ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <FilterListIcon />
          </IconButton>
        </Stack>
        {/* <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
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
            {/* <MenuItem onClick={()=>handleClickMenu('typeDes')}>Type</MenuItem>
          </Menu>
        </Stack> */}
        {sort === "name" ? (
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
