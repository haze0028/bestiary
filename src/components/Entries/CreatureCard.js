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

export default function CreatureCard({ creature, handleClickClose }) {
  return (
    <Root
      className={clsx({
        fadeIn: creature.name !== "",
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
          {creature.name}
        </Typography>
        <>
          {creature.type !== "" && (
            <>
              <Typography variant="h5">Type</Typography>
              <Typography variant="body1">{creature.type}</Typography>
            </>
          )}
          {creature.vulnerabilities.length > 0 && (
            <>
              <Typography variant="h5">Vulnerabilities</Typography>
              <Typography variant="body1">
                {creature.vulnerabilities}
              </Typography>
            </>
          )}
          {creature.resistances.length > 0 && (
            <>
              <Typography variant="h5">Resistances</Typography>
              <Typography variant="body1">{creature.resistances}</Typography>
            </>
          )}
          {creature.immunities.length > 0 && (
            <>
              <Typography variant="h5">Immunities</Typography>
              <Typography variant="body1">{creature.immunities}</Typography>
            </>
          )}
          {creature.traits.length > 0 && (
            <>
              <Typography variant="h5">Traits</Typography>
              <Typography variant="body1">{creature.traits}</Typography>
            </>
          )}
          {creature.proficiencies.length > 0 && (
            <>
              <Typography variant="h5">Proficiencies</Typography>
              <Typography variant="body1">{creature.proficiences}</Typography>
            </>
          )}
          {creature.bait.length > 0 && (
            <>
              <Typography variant="h5">Bait</Typography>
              <Typography variant="body1">{creature.bait}</Typography>
            </>
          )}
          {creature.quirks.length > 0 && (
            <>
              <Typography variant="h5">Quirks</Typography>
              <Typography variant="body1">{creature.quirks}</Typography>
            </>
          )}
          {creature.behaviours.length > 0 && (
            <>
              <Typography variant="h5">Behaviours</Typography>
              <Typography variant="body1">{creature.behaviours}</Typography>
            </>
          )}
          {creature.abilities.length > 0 && (
            <>
              <Typography variant="h5">Abilities</Typography>
              <Typography variant="body1">{creature.abilities}</Typography>
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
