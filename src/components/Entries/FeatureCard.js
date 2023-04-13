import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  IconButton,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function FeatureCard({
  title,
  contents,
  handleDeleteLine,
  handleDeleteAll,
}) {
  const type = typeof contents;

  return (
    <Box sx={{ width: "100%", mb: 1, breakInside: "avoid" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h3" gutterBottom>
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </Typography>
          {type === "string" ? (
            <Typography variant="body1">{contents}</Typography>
          ) : (
            <List sx={{ p: 0 }}>
              {contents.map((item) => {
                return (
                  <ListItem
                    key={item}
                    sx={{
                      px: 1,
                      py: 0.5,
                      display: "flex",
                      alignContent: "flex-start",
                      "&:hover": {
                        "& .MuiButtonBase-root": {
                          display: "block",
                        },
                      },
                    }}
                    secondaryAction={
                      <IconButton
                        sx={{ display: "none", height: 40 }}
                        title="Delete"
                        onClick={() => {
                          handleDeleteLine(title, item);
                        }}
                        edge="end"
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                  >
                    {item}
                  </ListItem>
                );
              })}
            </List>
          )}
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button color="secondary" onClick={() => handleDeleteAll(title)}>
            Clear all
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
