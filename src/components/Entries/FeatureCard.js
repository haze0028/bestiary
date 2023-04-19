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

export default function FeatureCards({
  data,
  handleDeleteAll,
  handleDeleteLine,
}) {
  return Object.entries(data).map(([key, value]) => {
    if (key !== "name" && key !== "type") {
      if (value.length !== 0) {
        return (
          <FeatureCard
            title={key}
            key={key}
            contents={value}
            handleDeleteAll={handleDeleteAll}
            handleDeleteLine={handleDeleteLine}
          />
        );
      }
    }
    return true;
  });
}

function FeatureCard({ title, contents, handleDeleteLine, handleDeleteAll }) {
  const type = typeof contents;

  return (
    <Box sx={{ width: "100%", mb: 1, breakInside: "avoid" }}>
      <Card variant="outlined">
        <CardContent sx={{ pb: 0 }}>
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
                      py: 0,
                      minHeight: 36,
                      boxSizing: "border-box",
                      display: "flex",
                      alignContent: "flex-start",
                      "&:hover": {
                        boxSizing: "border-box",
                        minHeight: 36,
                        "& button": {
                          display: "block",
                        },
                      },
                    }}
                  >
                    <Typography
                      title={item}
                      sx={{
                        flex: 1,
                        overflow: "hidden",
                        maxWidth: "100%",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item}
                    </Typography>
                    <IconButton
                      sx={{
                        display: "none",
                        height: 34,
                      }}
                      size="small"
                      title="Delete"
                      onClick={() => {
                        handleDeleteLine(title, item);
                      }}
                      edge="end"
                    >
                      <CloseIcon />
                    </IconButton>
                  </ListItem>
                );
              })}
            </List>
          )}
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button onClick={() => handleDeleteAll(title)}>Clear all</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
