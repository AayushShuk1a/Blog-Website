import { Box } from "@material-ui/core";

import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./components/Post/DetailView";
import CreateView from "./components/Post/CreateView";
import UpdateView from "./components/Post/UpdateView";
import Auth from "./Auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Box style={{ marginTop: 64 }}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/auth" element={<Auth></Auth>}></Route>
          <Route exact path="/details/:id" element={<DetailView />}></Route>
          <Route exact path="/create" element={<CreateView />}></Route>
          <Route exact path="/update/:id" element={<UpdateView />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
