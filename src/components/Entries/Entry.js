import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ monster }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h3" component="h2" gutterBottom>
          Monster: {monster.name}
        </Typography>
        <>
          {monster.type !== "" && (
            <>
              <Typography variant="h5">Type</Typography>
              <Typography variant="body2">{monster.type}</Typography>
            </>
          )}
          {monster.vulnerabilities.length > 0 && (
            <>
              <Typography variant="h5">Vulnerabilities</Typography>
              <Typography variant="body2">{monster.vulnerabilities}</Typography>
            </>
          )}
          {monster.resistances.length > 0 && (
            <>
              <Typography variant="h5">Resistances</Typography>
              <Typography variant="body2">{monster.resistances}</Typography>
            </>
          )}
          {monster.immunities.length > 0 && (
            <>
              <Typography variant="h5">Immunities</Typography>
              <Typography variant="body2">{monster.immunities}</Typography>
            </>
          )}
          {monster.traits.length > 0 && (
            <>
              <Typography variant="h5">Traits</Typography>
              <Typography variant="body2">{monster.traits}</Typography>
            </>
          )}
          {monster.proficiencies.length > 0 && (
            <>
              <Typography variant="h5">Proficiencies</Typography>
              <Typography variant="body2">{monster.proficiences}</Typography>
            </>
          )}
          {monster.bait.length > 0 && (
            <>
              <Typography variant="h5">Bait</Typography>
              <Typography variant="body2">{monster.bait}</Typography>
            </>
          )}
          {monster.quirks.length > 0 && (
            <>
              <Typography variant="h5">Quirks</Typography>
              <Typography variant="body2">{monster.quirks}</Typography>
            </>
          )}
          {monster.behaviours.length > 0 && (
            <>
              <Typography variant="h5">Behaviours</Typography>
              <Typography variant="body2">{monster.behaviours}</Typography>
            </>
          )}
          {monster.abilities.length > 0 && (
            <>
              <Typography variant="h5">Abilities</Typography>
              <Typography variant="body2">{monster.abilities}</Typography>
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
