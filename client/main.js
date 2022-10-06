import React from "react";
import "./main.css"
import { hydrate } from "react-dom";
import App from "./App";

hydrate(<App />, document.getElementById("root"));
