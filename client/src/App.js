import { Box } from "@material-ui/core";
import { Fragment } from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Box style={{ marginTop: 64 }}>
        <Home />
      </Box>
    </>
  );
}

export default App;
