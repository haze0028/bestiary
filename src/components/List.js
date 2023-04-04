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
} from "@mui/material";
import { DRAWER_WIDTH } from "../App";
import { useEffect, useState } from "react";

export default function List({ open, data, handleClick }) {
  const [sort, setSort] = useState("allAsc");
  const [names, setNames] = useState(data);

  function handleChange(e) {
    const val = e.target.value;
    setSort(val);
    console.log(sort);
  }

  const compareNames = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = a.name.toUpperCase();

    switch (sort) {
      case "allAsc":
        console.log(1);
        if (nameA < nameB) {
          return -1;
        }
        console.log(2);
        if (nameA > nameB) {
          return 1;
        }
        break;
      case "allDes":
        console.log(3);
        if (nameB < nameA) {
          return -1;
        }
        console.log(4);
        if (nameB > nameA) {
          return 1;
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log(data.sort((a, b) => compareNames(a, b)).reverse());
  }, [sort]);

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
        <Typography variant="h2">Monsters</Typography>
        <FormControl
          variant="standard"
          sx={{
            width: "90%",
            "& label.Mui-focused": {
              color: "brown",
            },
            "& .MuiSelect-select::after": {
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
            <MenuItem value="typeAsc">Type A-Z</MenuItem>
            <MenuItem value="typeDes">Type Z-A</MenuItem>
          </Select>
        </FormControl>
        <ul>
          {names.map((item) => {
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
