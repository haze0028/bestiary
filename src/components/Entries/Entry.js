import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import borderCorner from "../../images/borderCorner.png";

export default function BasicCard({ monster }) {
  return (
    <Card sx={{ minWidth: 275, padding: 5, position: "relative" }}>
      <img
        src={borderCorner}
        alt="border corner"
        id="border-corner1"
        className="border-corner"
      />
      <img
        src={borderCorner}
        alt="border corner"
        id="border-corner2"
        className="border-corner"
      />
      <img
        src={borderCorner}
        alt="border corner"
        id="border-corner3"
        className="border-corner"
      />
      <img
        src={borderCorner}
        alt="border corner"
        id="border-corner4"
        className="border-corner"
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
        <Button size="small">Close</Button>
      </CardActions>
    </Card>
  );
}
