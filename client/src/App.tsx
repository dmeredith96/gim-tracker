import {
  CircularProgress,
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
} from "@mui/material";
import { Player } from "oldschooljs/dist/meta/types";
import React, { useEffect, useState } from "react";
import { getAllPlayerHiscoresFromGroup } from "./api/api";
import "./App.css";
import { MilestonesContainer } from "./components/MilestonesContainer";
import { PlayersSection } from "./components/PlayersSection";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: [
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  const [players, setPlayers] = useState<Player[]>();
  useEffect(() => {
    getAllPlayerHiscoresFromGroup().then((resp) => {
      setPlayers(resp);
    });
  }, []);

  if (!players) {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Box
          flex={1}
          height="100vh"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 1,
          }}
        >
          <CircularProgress />
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <div className="App">
      {
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Ironreets
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <PlayersSection players={players} />
            <MilestonesContainer players={players} />
          </Box>
        </ThemeProvider>
      }
    </div>
  );
}

export default App;
