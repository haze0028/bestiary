import * as React from "react";
import borderCorner from "../../images/borderCorner.png";
import clsx from "clsx";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const Root = styled(Card)(({ theme }) => ({
  minWidth: 275,
  padding: theme.spacing(3),
  position: "relative",
  transition: "500ms",
  opacity: 0,

  "&.fadeIn": {
    opacity: 1,
  },

  "& .borderCorner": {
    width: "60px",
    height: "60px",
    position: "absolute",
    transition: "500ms ease-out",
  },

  "& #borderCorner1": {
    top: theme.spacing(1),
    left: theme.spacing(1),
  },

  "& #borderCorner2": {
    top: theme.spacing(1),
    right: theme.spacing(1),
    transform: "rotate(90deg)",
  },

  "& #borderCorner3": {
    bottom: theme.spacing(1),
    left: theme.spacing(1),
    transform: "rotate(-90deg)",
  },

  "& #borderCorner4": {
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    transform: "rotate(180deg)",
  },
}));

export default function MonsterCard({ monster, handleClickClose }) {
  return (
    <Root
      className={clsx("monsterCard", {
        fadeIn: monster.name !== "",
      })}
    >
      <img
        src={borderCorner}
        alt="border corner"
        id="borderCorner1"
        className="borderCorner"
      />
      <img
        src={borderCorner}
        alt="border corner"
        id="borderCorner2"
        className="borderCorner"
      />
      <img
        src={borderCorner}
        alt="border corner"
        id="borderCorner3"
        className="borderCorner"
      />
      <img
        src={borderCorner}
        alt="border corner"
        id="borderCorner4"
        className="borderCorner"
      />
      <CardContent>
        <Typography variant="h3" component="h2" gutterBottom>
          {monster.name}
        </Typography>
        <>
          {monster.type !== "" && (
            <>
              <Typography variant="h5">Type</Typography>
              <Typography variant="body1">{monster.type}</Typography>
            </>
          )}
          {monster.vulnerabilities.length > 0 && (
            <>
              <Typography variant="h5">Vulnerabilities</Typography>
              <Typography variant="body1">{monster.vulnerabilities}</Typography>
            </>
          )}
          {monster.resistances.length > 0 && (
            <>
              <Typography variant="h5">Resistances</Typography>
              <Typography variant="body1">{monster.resistances}</Typography>
            </>
          )}
          {monster.immunities.length > 0 && (
            <>
              <Typography variant="h5">Immunities</Typography>
              <Typography variant="body1">{monster.immunities}</Typography>
            </>
          )}
          {monster.traits.length > 0 && (
            <>
              <Typography variant="h5">Traits</Typography>
              <Typography variant="body1">{monster.traits}</Typography>
            </>
          )}
          {monster.proficiencies.length > 0 && (
            <>
              <Typography variant="h5">Proficiencies</Typography>
              <Typography variant="body1">{monster.proficiences}</Typography>
            </>
          )}
          {monster.bait.length > 0 && (
            <>
              <Typography variant="h5">Bait</Typography>
              <Typography variant="body1">{monster.bait}</Typography>
            </>
          )}
          {monster.quirks.length > 0 && (
            <>
              <Typography variant="h5">Quirks</Typography>
              <Typography variant="body1">{monster.quirks}</Typography>
            </>
          )}
          {monster.behaviours.length > 0 && (
            <>
              <Typography variant="h5">Behaviours</Typography>
              <Typography variant="body1">{monster.behaviours}</Typography>
            </>
          )}
          {monster.abilities.length > 0 && (
            <>
              <Typography variant="h5">Abilities</Typography>
              <Typography variant="body1">{monster.abilities}</Typography>
            </>
          )}
        </>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Add Section</Button>
        <Button size="small" onClick={handleClickClose}>
          Close
        </Button>
      </CardActions>
    </Root>
  );
}
