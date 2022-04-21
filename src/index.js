
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import Home from "./Home"
import { Provider } from "react-redux";
import NotesPage from "./NotesPage"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home/>} />
          <Route path="notes" element={<NotesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



