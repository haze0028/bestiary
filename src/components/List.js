import { useState } from "react";
import { styled } from "@mui/system";
import clsx from "clsx";
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
  Tooltip,
} from "@mui/material";
import { DRAWER_WIDTH } from "../constants";
import FilterListIcon from "@mui/icons-material/FilterList";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CloseIcon from "@mui/icons-material/Close";

const Root = styled(Box)(({ theme }) => ({}));

export default function ListDrawer({ open, data, handleClick, handleClose }) {
  const [sort, setSort] = useState("name");
  const [order, setOrder] = useState(true);
  const names = data.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
  const types = [...new Set(data.map((item) => item.type))];

  function orderClickHandler() {
    setOrder(!order);
  }

  function handleChange(e) {
    const val = e.target.value;
    setSort(val);
  }

  return (
    <Root sx={{ position: "relative" }}>
      <Drawer
        anchor="left"
        open={open}
        variant="persistent"
        sx={(theme) => ({
          "& .MuiPaper-root": {
            width: DRAWER_WIDTH,
            backgroundColor: "transparent",
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            boxSizing: "border-box",
          },
        })}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 1, mr: 1 }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Creatures
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 1, mr: 1 }}
        >
          <FormControl
            variant="standard"
            sx={{
              width: "70%",
              mb: 2,
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
          <Tooltip title={order ? "A-Z" : "Z-A"} arrow>
            <IconButton
              className={clsx("order-btn", {
                orderBtnDes: !order,
              })}
              sx={{ width: 40, height: 40 }}
              onClick={orderClickHandler}
            >
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <Box sx={{ overflowY: "auto" }} className="scrollbar" id="style-7">
          {sort === "name" ? (
            <>
              <List>
                {names
                  .sort((a, b) =>
                    order
                      ? a.name > b.name
                        ? 1
                        : -1
                      : a.name > b.name
                      ? -1
                      : 1
                  )
                  .map((item) => {
                    return (
                      <ListItem key={item.id}>
                        <ListItemIcon sx={{ minWidth: "unset" }}>
                          <WhatshotIcon />
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
                {types
                  .sort((a, b) => (order ? (a > b ? 1 : -1) : a > b ? -1 : 1))
                  .map((item) => {
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
                            .sort((a, b) =>
                              order
                                ? a.name > b.name
                                  ? 1
                                  : -1
                                : a.name > b.name
                                ? -1
                                : 1
                            )
                            .map((creature) => {
                              return (
                                <ListItem key={creature.id}>
                                  <ListItemIcon sx={{ minWidth: "unset" }}>
                                    <WhatshotIcon />
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
        </Box>
      </Drawer>
    </Root>
  );
}
